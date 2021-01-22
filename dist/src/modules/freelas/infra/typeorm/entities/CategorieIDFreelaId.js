"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Categories_1 = __importDefault(require("./Categories"));
var Freelas_1 = __importDefault(require("./Freelas"));
var CategorieIdFreelaId = /** @class */ (function () {
    function CategorieIdFreelaId() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], CategorieIdFreelaId.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        __metadata("design:type", String)
    ], CategorieIdFreelaId.prototype, "categorie_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CategorieIdFreelaId.prototype, "freela_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Categories_1.default; }, function (categories) { return categories; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'categorie_id' }),
        __metadata("design:type", Categories_1.default)
    ], CategorieIdFreelaId.prototype, "categorie", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Freelas_1.default; }),
        typeorm_1.JoinColumn({ name: 'freela_id' }),
        __metadata("design:type", Freelas_1.default)
    ], CategorieIdFreelaId.prototype, "freela", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], CategorieIdFreelaId.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], CategorieIdFreelaId.prototype, "updated_at", void 0);
    CategorieIdFreelaId = __decorate([
        typeorm_1.Entity('categorieIdFreelaId')
    ], CategorieIdFreelaId);
    return CategorieIdFreelaId;
}());
exports.default = CategorieIdFreelaId;
