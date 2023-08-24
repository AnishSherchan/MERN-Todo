"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.createUser = exports.getUserByToken = exports.getUserByEmail = exports.UserModal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    auth: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        token: { type: String, select: false },
    },
});
exports.UserModal = mongoose_1.default.model("Users", UserSchema);
//? get specific user by id
const getUserByEmail = (email) => {
    return exports.UserModal.findOne({ email });
};
exports.getUserByEmail = getUserByEmail;
const getUserByToken = (token) => exports.UserModal.findOne({
    "auth.token": token,
});
exports.getUserByToken = getUserByToken;
// ? Create User in the database
const createUser = (values) => new exports.UserModal(values).save().then((user) => user.toObject());
exports.createUser = createUser;
// ? Update User data
const updateUserById = (id, values) => {
    exports.UserModal.findByIdAndUpdate(id, values);
};
exports.updateUserById = updateUserById;
//# sourceMappingURL=users.js.map