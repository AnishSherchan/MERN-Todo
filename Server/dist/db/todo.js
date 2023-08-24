"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.createTodo = exports.getTodoById = exports.getTodo = exports.TodoModal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    status: { type: Boolean, required: true },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserModal",
        required: true,
    },
});
exports.TodoModal = mongoose_1.default.model("Todo", todoSchema);
const getTodo = (user) => exports.TodoModal.find({ user });
exports.getTodo = getTodo;
const getTodoById = (id) => exports.TodoModal.findById({ _id: id });
exports.getTodoById = getTodoById;
const createTodo = (values) => new exports.TodoModal(values).save().then((todo) => todo.toObject());
exports.createTodo = createTodo;
const deleteTodo = (id) => exports.TodoModal.findByIdAndDelete({ _id: id });
exports.deleteTodo = deleteTodo;
const updateTodo = (id, values) => {
    return exports.TodoModal.findByIdAndUpdate(id, values);
};
exports.updateTodo = updateTodo;
//# sourceMappingURL=todo.js.map