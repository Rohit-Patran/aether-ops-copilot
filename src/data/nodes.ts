import { EdgeNodeOption } from '../types';

export const NODES: EdgeNodeOption[] = [
  {
    id: 'AP-MUMBAI-PROD-01',
    name: 'AP-MUMBAI-PROD-01',
    location: 'Mumbai, IN',
    anomaly: 'Ambient thermal ceiling >38°C',
    priority: 'CRITICAL',
  },
  {
    id: 'US-VIRGINIA-EDGE-01',
    name: 'US-VIRGINIA-EDGE-01',
    location: 'Virginia, US',
    anomaly: 'HTTP Ingress Latency SLA Spike >400ms',
    priority: 'CRITICAL',
  },
  {
    id: 'EU-IRELAND-CORE-01',
    name: 'EU-IRELAND-CORE-01',
    location: 'Dublin, IE',
    anomaly: 'Wind Shear Telemetry Drift >35 km/h',
    priority: 'WARNING',
  },
];