import { useMemo } from "react";
import type { Vehicle } from "../types";
import { Sidebar, Title, Select, Button } from "../ui";

type Props = {
  vehicles: Vehicle[];
  selectedMake: string | null;
  selectedColor: string | null;
  onMakeChange: (make: string | null) => void;
  onColorChange: (color: string | null) => void;
};

export default function Filters({
  vehicles,
  selectedMake,
  selectedColor,
  onMakeChange,
  onColorChange,
}: Props) {
  // Create arrays of unique makes and colors from the list of vehicles
  const makes = useMemo(() => {
    // Create a Set from the list of makes
    const makeSet = new Set(vehicles.map((v) => v.make));
    // Convert the Set to an array and sort it
    return Array.from(makeSet).sort();
  }, [vehicles]);

  const colors = useMemo(() => {
    // Create a Set from the list of colors
    const colorSet = new Set(vehicles.map((v) => v.color));
    // Convert the Set to an array and sort it
    return Array.from(colorSet).sort();
  }, [vehicles]);

  return (
    <Sidebar aria-label="filters">
      <Title>Filters</Title>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontSize: 12, color: "var(--muted)" }} htmlFor="make">
          Make
        </label>
        <Select
          id="make"
          value={selectedMake ?? ""}
          onChange={(e) =>
            onMakeChange((e.target as HTMLSelectElement).value || null)
          }
          aria-label="make-filter"
        >
          <option value="">All</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Select>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ fontSize: 12, color: "var(--muted)" }} htmlFor="color">
          Color
        </label>
        <Select
          id="color"
          value={selectedColor ?? ""}
          onChange={(e) =>
            onColorChange((e.target as HTMLSelectElement).value || null)
          }
          aria-label="color-filter"
        >
          <option value="">All</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </Select>
      </div>

      {(selectedMake || selectedColor) && (
        <Button
          className="secondary"
          onClick={() => {
            onMakeChange(null);
            onColorChange(null);
          }}
          type="button"
        >
          Clear Filters
        </Button>
      )}
    </Sidebar>
  );
}
