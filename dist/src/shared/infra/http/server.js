"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("../typeorm");
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var path_1 = require("path");
var routes_1 = __importDefault(require("./routes"));
var logs_1 = __importDefault(require("./middlewares/logs"));
var errorsParserMiddleware_1 = __importDefault(require("./middlewares/errorsParserMiddleware"));
require("../../container");
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(logs_1.default);
app.use('/files', express_1.default.static(path_1.resolve(__dirname, '..', '..', '..', '..', 'temp', 'uploads')));
app.use(routes_1.default);
app.use(errorsParserMiddleware_1.default);
var PORT = process.env.PORT || 3333;
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 server started in http://localhost:" + PORT);
});
