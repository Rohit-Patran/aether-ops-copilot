import express from 'express';
import cors from 'cors';
import apiRoutes from './server/routes/apiRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Main API Router Mounting
app.use('/api', apiRoutes);

app.listen(PORT, '0.0.0.0' , () => {
  console.log(`[AetherOps] Server running on http://localhost:${PORT}`);
});