export const getHealth = (req, res) => {
  res.json({ status: 'Aether Copilot Engine Online', model: 'Aether-LLM-v2.8-Cloud' });
};