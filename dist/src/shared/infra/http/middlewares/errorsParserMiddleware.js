"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
exports.default = (function (error, request, response, _) {
    console.log(error.message);
    if (error instanceof AppError_1.default) {
        return response.status(error.status).json({
            status: 'Error',
            message: error.message,
        });
    }
    return response.status(500).json({
        status: 'Error',
        message: 'Internal server error',
    });
});
// errorsParserMiddleware;
