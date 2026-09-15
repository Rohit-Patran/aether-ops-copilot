import { buildDiagnosticTokens, streamSsePayload } from '../services/sseStreamService.js';

export const handleDiagnose = async (req, res) => {
  try {
    const { nodeRef } = req.body;
    const tokens = buildDiagnosticTokens(nodeRef);
    await streamSsePayload(res, tokens);
  } catch (error) {
    console.error('Diagnostic streaming failure:', error);
    res.status(500).json({ error: 'Failed to initiate SSE pipeline' });
  }
};