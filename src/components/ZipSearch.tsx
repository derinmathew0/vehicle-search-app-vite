import { FormEvent } from 'react';
import { Input, Button } from '../ui';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
};

export default function ZipSearch({ value, onChange, onSubmit }: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} aria-label="zip-search-form">
      <label aria-label="zip-label" style={{ fontSize: 12, color: 'var(--muted)' }} htmlFor="zip">ZIP Code</label>
      <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
        <Input
          id="zip"
          placeholder="Enter 5-digit ZIP (e.g., 02118)"
          value={value}
          onChange={(e) => onChange((e.target as HTMLInputElement).value)}
          inputMode="numeric"
          aria-label="zip-input"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}