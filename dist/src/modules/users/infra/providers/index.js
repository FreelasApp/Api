"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var JWTProvider_1 = __importDefault(require("./TokenProvider/implementations/JWTProvider"));
var BCryptProvider_1 = __importDefault(require("./HashProvider/implementations/BCryptProvider"));
tsyringe_1.container.registerSingleton('TokenProvider', JWTProvider_1.default);
tsyringe_1.container.registerSingleton('HashProvider', BCryptProvider_1.default);
