import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);

// get single data
router.get("/:studentId", StudentController.getSingleStudents)

export const StudentRoutes = router;
