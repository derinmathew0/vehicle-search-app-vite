import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders search and validates ZIP", () => {
  render(<App />);

  // Get the ZIP input element and form
  const input = screen.getByLabelText("zip-input") as HTMLInputElement;
  const form = screen.getByLabelText("zip-search-form");

  // Enter invalid ZIP code and submit form
  fireEvent.change(input, { target: { value: "abc" } });
  fireEvent.submit(form);

  // Error message displays
  expect(screen.getByRole("alert")).toHaveTextContent(
    "Please enter a valid 5-digit ZIP code."
  );

  // Clear the ZIP input field
  fireEvent.change(input, { target: { value: "" } });
  // Error message clears
  expect(screen.queryByRole("alert")).toBeNull();

  // Enter valid ZIP code and submit form
  fireEvent.change(input, { target: { value: "02118" } });
  fireEvent.submit(form);

  // Error message cleared
  expect(
    screen.queryByText("Please enter a valid 5-digit ZIP code.")
  ).toBeNull();
  // Vehicle list renders
  expect(screen.getByLabelText("vehicle-list")).toBeInTheDocument();
});
