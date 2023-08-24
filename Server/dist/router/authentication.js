"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controller/authentication");
exports.default = (router) => {
    router.post("/auth/register", authentication_1.registerUser);
    router.post("/auth/login", authentication_1.userLogin);
};
//# sourceMappingURL=authentication.js.map