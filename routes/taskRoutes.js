import express from 'express';
const router = express.Router();
import taskController from '../controllers/taskController.js';


router.route('/').get(taskController.getAllTasks);

router.route('/').get(taskController.getAllTasks).post(taskController.createTasks);
router.route('/:id').get(taskController.getTasks).patch(taskController.updateTasks).delete(taskController.deleteTasks);

export default router;
