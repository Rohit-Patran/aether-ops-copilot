export interface EdgeNodeOption {
  id: string;
  name: string;
  location: string;
  anomaly: string;
  priority: 'CRITICAL' | 'WARNING' | 'HEALTHY';
}