import express from "express";

import  protect  from "../middleware/authmiddleware.js";

import { createTodo,getTodos,completeTodo,deleteTodo,updateTodo} from "../controllers/todoCont.js";

const router=express.Router();

router
.route("/")
.post(protect,createTodo)
.get(protect,getTodos);

router.
route("/.id")
.put(protect,updateTodo)
.patch(protect,completeTodo)
.delete(protect,deleteTodo);

export default router;
