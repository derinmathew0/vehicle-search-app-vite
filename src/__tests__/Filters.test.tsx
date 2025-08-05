import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("filters by make and color", () => {
  render(<App />);

  // Enter a valid ZIP code and submit the form
  const input = screen.getByLabelText("zip-input") as HTMLInputElement;
  const form = screen.getByLabelText("zip-search-form");
  fireEvent.change(input, { target: { value: "02118" } });
  fireEvent.submit(form);

  // Apply filters for make and color
  fireEvent.change(screen.getByLabelText("make-filter"), {
    target: { value: "Toyota" },
  });
  fireEvent.change(screen.getByLabelText("color-filter"), {
    target: { value: "White" },
  });

  // Verify that only one vehicle card is displayed and it matches the filtered criteria
  const cards = screen.getAllByRole("article");
  expect(cards.length).toBe(1);
  expect(cards[0]).toHaveAccessibleName(/Toyota RAV4/);
});
