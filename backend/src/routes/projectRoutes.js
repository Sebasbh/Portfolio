import { Router } from 'express';
import { getProjects, createProject } from '../controllers/projectController.js';
import { authMiddleware as auth } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/', getProjects);
router.post('/', auth, createProject);

export default router;
