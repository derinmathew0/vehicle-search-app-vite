import { useMemo, useState } from "react";
import ZipSearch from "./components/ZipSearch";
import Filters from "./components/Filters";
import Sorter from "./components/Sorter";
import VehicleList from "./components/VehicleList";
import ErrorBanner from "./components/ErrorBanner";
import { vehicles as allVehicles } from "./data/vehicles";
import type { SortKey, Vehicle } from "./types";
import { isValidUSZip } from "./utils/validation";
import {
  GlobalStyle,
  Header,
  Brand,
  Container,
  Panel,
  Title,
  Toolbar,
} from "./ui";

// State shape for form controls and applied filters
type FormState = {
  zipInput: string; // Current value in ZIP input field
  zip: string | null; // ZIP code applied to filter vehicles
  sort: SortKey; // Current sort option
  make: string | null; // Selected vehicle make filter
  color: string | null; // Selected vehicle color filter
};

// Helper function to sort vehicles based on selected sort key
function sortVehicles(list: Vehicle[], sort: SortKey): Vehicle[] {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "year-asc":
      return copy.sort((a, b) => a.year - b.year);
    case "year-desc":
      return copy.sort((a, b) => b.year - a.year);
    default:
      return copy;
  }
}

export default function App() {
  // Main form state for filters, sort, and ZIP input
  const [form, setForm] = useState<FormState>({
    zipInput: "",
    zip: null,
    sort: "price-desc",
    make: null,
    color: null,
  });
  // Error message state for user feedback
  const [error, setError] = useState<string>("");

  // Handle changes in the ZIP input field
  const onZipInputChange = (value: string) => {
    setForm((prev) => ({ ...prev, zipInput: value }));
    // If input is cleared, reset error and applied filters
    if (value.trim() === "") {
      setError(""); // Clear error when field is cleared
      setForm((prev) => ({ ...prev, zip: null, make: null, color: null }));
    }
  };

  // Handle ZIP code submission (apply filter)
  const onZipSubmit = () => {
    const value = form.zipInput.trim();
    // Validate ZIP code format
    if (!value || !isValidUSZip(value)) {
      setError("Please enter a valid 5-digit ZIP code.");
      setForm((prev) => ({ ...prev, zip: null }));
      return;
    }
    // Check if any vehicles exist for the ZIP code
    const hasAny = allVehicles.some((v) => v.zip === value);
    if (!hasAny) {
      setError("No vehicles found for the provided ZIP code.");
      setForm((prev) => ({ ...prev, zip: value }));
      return;
    }
    // Valid ZIP and vehicles found: apply filter and clear error
    setError("");
    setForm((prev) => ({ ...prev, zip: value }));
  };

  // Vehicles available for filter dropdowns (based on ZIP filter)
  const vehiclesForFilterOptions = useMemo(() => {
    return form.zip
      ? allVehicles.filter((v) => v.zip === form.zip)
      : allVehicles;
  }, [form.zip]);

  // Vehicles to display in the results list (filtered and sorted)
  const vehicles = useMemo(() => {
    let result = allVehicles;
    if (form.zip) result = result.filter((v) => v.zip === form.zip);
    if (form.make) result = result.filter((v) => v.make === form.make);
    if (form.color) result = result.filter((v) => v.color === form.color);
    return sortVehicles(result, form.sort);
  }, [form.zip, form.make, form.color, form.sort]);

  return (
    <div>
      {/* Global styles for the app */}
      <GlobalStyle />
      {/* App header with brand and ZIP search */}
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Brand>Flexcar-style Inventory</Brand>
          <div style={{ width: 420, maxWidth: "100%" }}>
            <ZipSearch
              value={form.zipInput}
              onChange={onZipInputChange}
              onSubmit={onZipSubmit}
            />
          </div>
        </div>
      </Header>

      {/* Main content container */}
      <Container>
        {/* Filter controls for make and color */}
        <Filters
          vehicles={vehiclesForFilterOptions}
          selectedMake={form.make}
          selectedColor={form.color}
          onMakeChange={(make) => setForm((prev) => ({ ...prev, make }))}
          onColorChange={(color) => setForm((prev) => ({ ...prev, color }))}
        />
        <section>
          <Panel>
            {/* Toolbar with results title and sort dropdown */}
            <Toolbar>
              <Title style={{ margin: 0 }}>Results</Title>
              <Sorter
                sort={form.sort}
                onChange={(s) => setForm((prev) => ({ ...prev, sort: s }))}
              />
            </Toolbar>
            {/* Show error messages if any */}
            <ErrorBanner message={error} />
            {/* Show message if no vehicles match current filters */}
            {form.zip && vehicles.length === 0 && !error && (
              <ErrorBanner message="No vehicles match your filters." />
            )}
            {/* List of vehicles matching filters and sort */}
            <VehicleList vehicles={vehicles} />
          </Panel>
        </section>
      </Container>
    </div>
  );
}
