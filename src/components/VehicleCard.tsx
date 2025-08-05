import type { Vehicle } from '../types';
import { Card, CardImg, CardBody, Badge, Label, Value } from '../ui';

export default function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <Card role="article" aria-label={`${v.year} ${v.make} ${v.model}`}>
      <CardImg src={v.image} alt={`${v.make} ${v.model}`} />
      <CardBody>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 700 }}>{v.year} {v.make} {v.model}</div>
          <Badge>${v.price.toLocaleString()}</Badge>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div><Label>Trim:</Label> <Value>{v.trim}</Value></div>
          <div><Label>Color:</Label> <Value>{v.color}</Value></div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div><Label>Mileage:</Label> <Value>{v.mileage.toLocaleString()} mi</Value></div>
          <div><Label>ZIP:</Label> <Value>{v.zip}</Value></div>
        </div>
      </CardBody>
    </Card>
  );
}