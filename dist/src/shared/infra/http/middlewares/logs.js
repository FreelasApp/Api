"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    console.time();
    console.log("[METHOD]: " + req.method + " [URL]: " + req.url);
    next();
    console.timeEnd();
});
