"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.registerUser = void 0;
const users_1 = require("../db/users");
const helpers_1 = require("../helpers");
const registerUser = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.sendStatus(400);
        }
        const exisitingUser = await (0, users_1.getUserByEmail)(email);
        if (exisitingUser) {
            return res.sendStatus(400);
        }
        const salt = (0, helpers_1.random)();
        const user = await (0, users_1.createUser)({
            email,
            username,
            auth: {
                salt,
                password: (0, helpers_1.authentication)(salt, password),
            },
        });
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.registerUser = registerUser;
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }
        const user = await (0, users_1.getUserByEmail)(email).select("+auth.password +auth.salt +auth.token");
        if (!user) {
            return res.sendStatus(400);
        }
        const expectedHash = (0, helpers_1.authentication)(user.auth.salt, password);
        if (expectedHash !== user.auth.password) {
            return res.sendStatus(403);
        }
        const salt = (0, helpers_1.random)();
        user.auth.token = (0, helpers_1.authentication)(salt, user._id.toString());
        await user.save();
        res.cookie("KeyTodo", user.auth.token);
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.userLogin = userLogin;
//# sourceMappingURL=authentication.js.map