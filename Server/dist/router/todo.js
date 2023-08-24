"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../controller/todo");
const middleware_1 = require("../middleware");
exports.default = (router) => {
    router.post("/todo/create", middleware_1.isAuthenticated, todo_1.createNewTodo);
    router.get("/todo", middleware_1.isAuthenticated, todo_1.getUserTodo);
    router.delete("/todo/delete", middleware_1.isAuthenticated, todo_1.deleteUserTodo);
    router.put("/todo/update", middleware_1.isAuthenticated, todo_1.updateUserTodo);
};
//# sourceMappingURL=todo.js.map