import type { Vehicle } from '../types';
import VehicleCard from './VehicleCard';
import { Grid } from '../ui';

export default function VehicleList({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <Grid aria-label="vehicle-list">
      {vehicles.map(v => <VehicleCard key={v.id} v={v} />)}
    </Grid>
  );
}