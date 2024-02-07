"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = exports.USER_ROLES = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["NORMAL"] = "NORMAL";
    USER_ROLES["ADMIN"] = "ADMIN";
})(USER_ROLES || (exports.USER_ROLES = USER_ROLES = {}));
class TokenManager {
    constructor() {
        this.createToken = (payload) => {
            const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            });
            return token;
        };
        this.getPayload = (token) => {
            try {
                console.log("Token gerado:", token);
                const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
                return payload;
            }
            catch (error) {
                console.error("Error verifying token:", error);
                console.log("Payload decodificado:", this.getPayload);
                return null;
            }
        };
    }
}
exports.TokenManager = TokenManager;
