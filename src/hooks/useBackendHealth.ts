import { useState } from 'react';

export function useBackendHealth() {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null);

  const verifyHealth = async (): Promise<boolean> => {
    try {
      const res = await fetch('/api/health');
      const healthy = res.ok;
      setIsHealthy(healthy);
      return healthy;
    } catch {
      setIsHealthy(false);
      return false;
    }
  };

  return { isHealthy, verifyHealth };
}