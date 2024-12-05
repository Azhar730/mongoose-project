import express from 'express';
import { studentController } from './student.controller';
const router = express.Router();
router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSingleStudent);
router.delete('/:studentId', studentController.deleteSingleStudent);
export const studentRoutes = router;