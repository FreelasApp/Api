"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AutheticadedUserService_1 = __importDefault(require("@modules/users/services/AutheticadedUserService"));
var FakeTokenProvider_1 = __importDefault(require("@modules/users/infra/providers/TokenProvider/fake/FakeTokenProvider"));
var FakeHashProvider_1 = __importDefault(require("@modules/users/infra/providers/HashProvider/fake/FakeHashProvider"));
var FakeUserRepository_1 = __importDefault(require("@modules/users/repositories/fake/FakeUserRepository"));
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
var autheticadedUserService;
var fakeUsersRepository;
var fakeTokenProvider;
var fakeHashProvider;
describe('AutheticadedUser', function () {
    beforeEach(function () {
        fakeUsersRepository = new FakeUserRepository_1.default();
        fakeTokenProvider = new FakeTokenProvider_1.default();
        fakeHashProvider = new FakeHashProvider_1.default();
        autheticadedUserService = new AutheticadedUserService_1.default(fakeUsersRepository, fakeTokenProvider, fakeHashProvider);
    });
    it('should be able to create a new session for user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, session;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fakeUsersRepository.create({
                        email: 'jonhdoe@example.com',
                        firstName: 'Jonh',
                        lastName: 'Doe',
                        password: '123456',
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, autheticadedUserService.execute({
                            email: user.email,
                            password: '123456',
                        })];
                case 2:
                    session = _a.sent();
                    expect(session.token).not.toBeNull();
                    expect(session.user.id).toBe(user.id);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to create a new session for user if email is incorrect', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fakeUsersRepository.create({
                        email: 'jonhdoe@example.com',
                        firstName: 'Jonh',
                        lastName: 'Doe',
                        password: '123456',
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, expect(autheticadedUserService.execute({
                            email: 'test@test.com',
                            password: '123456',
                        })).rejects.toBeInstanceOf(AppError_1.default)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to create a new session for user if password is incorrect', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fakeUsersRepository.create({
                        email: 'jonhdoe@example.com',
                        firstName: 'Jonh',
                        lastName: 'Doe',
                        password: '123456',
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, expect(autheticadedUserService.execute({
                            email: user.email,
                            password: '12345677',
                        })).rejects.toBeInstanceOf(AppError_1.default)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
