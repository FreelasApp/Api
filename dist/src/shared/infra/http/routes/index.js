"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("@modules/users/infra/http/routes/user.routes"));
var session_routes_1 = __importDefault(require("@modules/users/infra/http/routes/session.routes"));
var profile_routes_1 = __importDefault(require("@modules/users/infra/http/routes/profile.routes"));
var freelas_routes_1 = __importDefault(require("@modules/freelas/infra/http/routes/freelas.routes"));
var routes = express_1.Router();
routes.use('/users', user_routes_1.default);
routes.use('/login', session_routes_1.default);
routes.use('/profile', profile_routes_1.default);
routes.use('/freelas', freelas_routes_1.default);
exports.default = routes;
