import express from 'express'
import { currentUser } from '../controllers/Auth.js';
import AuthUser from '../middlewares/isAuth.js';
import  { deleteEle, getAllTasks, getUpdateData, TaskCon, UpdateComp, updateTask } from '../controllers/Task.controller.js';

const TaskRouter = express.Router();


TaskRouter.post("/add-task",AuthUser,TaskCon);
TaskRouter.get("/all-tasks", AuthUser, getAllTasks);
TaskRouter.get("/update/:id", AuthUser, getUpdateData);
TaskRouter.put("/update/:id", AuthUser, updateTask);
TaskRouter.put("/complete/:id", AuthUser,UpdateComp );
TaskRouter.delete('/delete/:id',deleteEle)

export default TaskRouter;