"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UserRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UserRepository"));
var FreelaRepository_1 = __importDefault(require("@modules/freelas/infra/typeorm/repositories/FreelaRepository"));
var CategoriesRepository_1 = __importDefault(require("@modules/freelas/infra/typeorm/repositories/CategoriesRepository"));
var CategorieIdFreelaIdRepository_1 = __importDefault(require("@modules/freelas/infra/typeorm/repositories/CategorieIdFreelaIdRepository"));
require("./providers");
require("@modules/users/infra/providers");
tsyringe_1.container.registerSingleton('UserRepository', UserRepository_1.default);
tsyringe_1.container.registerSingleton('FreelaRepository', FreelaRepository_1.default);
tsyringe_1.container.registerSingleton('CategoriesRepository', CategoriesRepository_1.default);
tsyringe_1.container.registerSingleton('CategorieIdFreelaIdRepository', CategorieIdFreelaIdRepository_1.default);
