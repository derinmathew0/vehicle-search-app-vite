import type { SortKey } from '../types';
import { Select } from '../ui';

type Props = {
  sort: SortKey;
  onChange: (s: SortKey) => void;
};

export default function Sorter({ sort, onChange }: Props) {
  return (
    <div aria-label="sorter" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <label style={{ fontSize: 12, color: 'var(--muted)' }} htmlFor="sort">Sort by</label>
      <Select
        id="sort"
        value={sort}
        onChange={(e) => onChange((e.target as HTMLSelectElement).value as SortKey)}
      >
        <option value="price-desc">Price (High → Low)</option>
        <option value="price-asc">Price (Low → High)</option>
        <option value="year-desc">Year (Newest → Oldest)</option>
        <option value="year-asc">Year (Oldest → Newest)</option>
      </Select>
    </div>
  );
}