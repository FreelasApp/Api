"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppError = /** @class */ (function () {
    function AppError(message, status) {
        if (status === void 0) { status = 400; }
        this.message = message;
        this.status = status;
    }
    return AppError;
}());
exports.default = AppError;
