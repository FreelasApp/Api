"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var FreelasController_1 = __importDefault(require("../controllers/FreelasController"));
var ListAllFreelasByStatusController_1 = __importDefault(require("../controllers/ListAllFreelasByStatusController"));
var ListFreelaByIdController_1 = __importDefault(require("../controllers/ListFreelaByIdController"));
var freelasRoutes = express_1.Router();
var freelasController = new FreelasController_1.default();
var listAllFreelasByStatusController = new ListAllFreelasByStatusController_1.default();
var listFreelaByIdController = new ListFreelaByIdController_1.default();
freelasRoutes.use(ensureAuthenticated_1.default);
freelasRoutes.get('/:id', listFreelaByIdController.index);
freelasRoutes.get('/', listAllFreelasByStatusController.index);
freelasRoutes.post('/', freelasController.create);
exports.default = freelasRoutes;
