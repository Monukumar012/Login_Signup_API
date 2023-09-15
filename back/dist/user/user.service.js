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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require('bcrypt');
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async registerUser(registerData) {
        const email = registerData.email;
        const password = registerData.password;
        if (!email || !password) {
            return {
                message: "Enter Email and Password",
                success: false,
            };
        }
        const existsingUser = await this.userModel.findOne({ email });
        if (existsingUser) {
            return {
                message: "User Already Exists",
                success: false
            };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new this.userModel({ email, password: hashedPassword });
        await user.save();
        return {
            message: "Register Successfully",
            success: true,
            user
        };
    }
    async loginUser(loginData) {
        const email = loginData.email;
        const password = loginData.password;
        if (!email || !password) {
            return {
                message: "Enter Email and Password",
                success: false,
            };
        }
        const user = await this.userModel.findOne({ email });
        if (!user) {
            return {
                message: "User Not Exists",
                success: false
            };
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return {
                message: "Enter Correct Details",
                success: false,
            };
        }
        return {
            message: "Login Successfully",
            success: true,
            user
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map