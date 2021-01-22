"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var uploads_1 = __importDefault(require("@configs/uploads"));
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var UpdateAvatarController_1 = __importDefault(require("../controllers/UpdateAvatarController"));
var profileRoutes = express_1.Router();
var upload = multer_1.default({
    storage: uploads_1.default.multer,
});
profileRoutes.use(ensureAuthenticated_1.default);
var updateAvatarController = new UpdateAvatarController_1.default();
profileRoutes.patch('/avatar', upload.single('avatar'), updateAvatarController.index);
exports.default = profileRoutes;
