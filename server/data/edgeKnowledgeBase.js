// Knowledge base tied directly to Project 1 & 2 edge stations
export const EDGE_KNOWLEDGE_BASE = {
  'AP-MUMBAI-PROD-01': {
    region: 'ap-south-1 (Mumbai, IN)',
    type: 'Thermal Ceiling Threshold Breached (>38°C)',
    rootCause: 'Ambient cross-zone cooling duct failure paired with concentrated stateless container scheduling.',
    remediationSteps: [
      'Trigger Horizontal Pod Autoscaler (HPA) to drain 40% of ingress traffic to AP-MUMBAI-PROD-02 (Pune failover).',
      'Execute `kubectl taint nodes node-ap-south-1 maintenance=true:NoSchedule` to avoid pending pod allocation.',
      'Calibrate thermal governor to throttled clock frequency (2.4 GHz) until auxiliary cooling stabilizes.'
    ],
    recommendedCli: 'kubectl cordon node-ap-south-1 && kubectl scale deployment ingress-gateway --replicas=8 -n prod'
  },
  'US-VIRGINIA-EDGE-01': {
    region: 'us-east-1 (Virginia, US)',
    type: 'HTTP Ingress Latency SLA Spike (>400ms)',
    rootCause: 'BGP routing route-flap upstream at carrier tier-1 peer causing asymmetric packet return paths.',
    remediationSteps: [
      'Switch ingress traffic policy to Cloudflare Magic Transit fallback route.',
      'Flush local edge DNS cache to re-point global Anycast routes to Ohio (us-east-2) edge gateway.',
      'Check SYN-ACK handshakes with `mtr --tcp --port 443 37.431.-78.656`.'
    ],
    recommendedCli: 'az network dns record-set cname update --resource-group EdgeRG --zone-name prod.cloud --name api --target-resource-id /subscriptions/edge-gateway-backup'
  },
  'EU-IRELAND-CORE-01': {
    region: 'eu-west-1 (Dublin, IE)',
    type: 'Wind Shear Anomaly & Antenna Telemetry Drift (>35 km/h)',
    rootCause: 'Microwave telemetry backup dish experiencing structural wind shear vibration; minor packet drift on non-critical streams.',
    remediationSteps: [
      'Force all telemetry synchronization to primary underground fiber trunk line.',
      'Enable jitter buffer size increase from 20ms to 60ms on incoming UDP stream collectors.',
      'Validate SLA parity across all 5 distributed nodes via PulseOps telemetry fabric.'
    ],
    recommendedCli: `curl -X POST https://internal-mesh.local/v1/network/reroute -d '{"node":"EU-IRELAND-CORE-01","prefer":"fiber"}'`
  }
};