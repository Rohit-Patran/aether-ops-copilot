import { EDGE_KNOWLEDGE_BASE } from '../data/edgeKnowledgeBase.js';

export const buildDiagnosticTokens = (nodeRef) => {
  const selectedNode = EDGE_KNOWLEDGE_BASE[nodeRef] || {
    region: 'Global Cluster Ingress',
    type: 'Generic Telemetry SLA Variance',
    rootCause: 'Uncorrelated transient latency spike detected across edge probe handlers.',
    remediationSteps: [
      'Run end-to-end synthetic probe ping across 5 active edge regions.',
      'Inspect error distribution in PulseFlow incident backlog.'
    ],
    recommendedCli: 'kubectl get pods -A --field-selector=status.phase!=Running'
  };

  return [
    `Initiating automated root cause analysis for **${nodeRef}**...\n\n`,
    `> **Region Mapping:** ${selectedNode.region}\n`,
    `> **Flagged Anomaly:** ${selectedNode.type}\n\n`,
    `### 1. Root Cause Identification\n`,
    `Correlation with live telemetry fabric indicates: ${selectedNode.rootCause}\n\n`,
    `### 2. Verified Remediation Steps (SRE Runbook)\n`,
    `1. ${selectedNode.remediationSteps[0]}\n`,
    `2. ${selectedNode.remediationSteps[1]}\n`,
    `3. ${selectedNode.remediationSteps[2] || 'Verify metric normalization on PulseOps console.'}\n\n`,
    `### 3. Recommended Automated Execution\n`,
    `Execute the following command on your edge management terminal:\n`,
    `\`\`\`bash\n${selectedNode.recommendedCli}\n\`\`\`\n\n`,
    `[STATUS] Ready to dispatch execution payload or mark incident resolved in KineticFlow.`
  ];
};

export const streamSsePayload = async (res, tokens, intervalMs = 80) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  for (const token of tokens) {
    res.write(`data: ${JSON.stringify({ text: token })}\n\n`);
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }

  res.write(`data: [DONE]\n\n`);
  res.end();
};