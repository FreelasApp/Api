"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
var crypto_1 = __importDefault(require("crypto"));
var filepath = path_1.resolve(__dirname, '..', '..', 'temp');
exports.default = {
    tempPath: filepath,
    uploadPath: path_1.resolve(filepath, 'uploads'),
    multer: multer_1.default.diskStorage({
        destination: filepath,
        filename: function (req, file, cb) {
            var hash = crypto_1.default.randomBytes(8).toString('hex');
            var fileHash = hash + "-" + file.originalname;
            return cb(null, fileHash);
        },
    }),
};
