"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserTodo = exports.deleteUserTodo = exports.createNewTodo = exports.getUserTodo = void 0;
const todo_1 = require("../db/todo");
const getUserTodo = async (req, res) => {
    try {
        const { user_id } = req.body;
        if (!user_id) {
            res.sendStatus(400);
        }
        const todos = await (0, todo_1.getTodo)(user_id);
        return res.status(200).json(todos).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getUserTodo = getUserTodo;
const createNewTodo = async (req, res) => {
    try {
        const { title, status, user } = req.body;
        if (!title || status === undefined || !user) {
            return res.sendStatus(400);
        }
        const todo = await (0, todo_1.createTodo)({
            title,
            status,
            user,
        });
        return res.status(200).json(todo).end();
    }
    catch (error) {
        console.error("Error:", error); // Add this line for debugging
        return res.sendStatus(400);
    }
};
exports.createNewTodo = createNewTodo;
const deleteUserTodo = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.sendStatus(400);
        }
        const deletedTodoitem = await (0, todo_1.deleteTodo)(id);
        return res.status(200).json(deletedTodoitem).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteUserTodo = deleteUserTodo;
const updateUserTodo = async (req, res) => {
    try {
        const { title, status, id } = req.body;
        if (!title || status === undefined || !id) {
            return res.sendStatus(400);
        }
        const updatedTodo = await (0, todo_1.updateTodo)(id, {
            title,
            status,
        });
        return res.status(200).json(updatedTodo).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateUserTodo = updateUserTodo;
//# sourceMappingURL=todo.js.map