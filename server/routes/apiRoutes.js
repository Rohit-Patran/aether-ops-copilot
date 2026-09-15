import { Router } from 'express';
import { handleDiagnose } from '../controllers/diagnoseController.js';
import { getHealth } from '../controllers/healthController.js';

const router = Router();

router.get('/health', getHealth);
router.post('/ai/diagnose', handleDiagnose);

export default router;