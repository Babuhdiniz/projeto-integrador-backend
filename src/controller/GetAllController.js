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
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("../errors/BaseError");
class GetAllController {
    constructor(getAllBusiness) {
        this.getAllBusiness = getAllBusiness;
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.getAllBusiness.getAllUsers();
                // Respondendo com os usuários
                res.status(200).json({ users });
            }
            catch (error) {
                console.error("Error during getAllUsers:", error);
                if (error instanceof BaseError_1.BaseError) {
                    res.status(error.statusCode).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: "Internal Server Error" });
                }
            }
        });
    }
}
exports.default = GetAllController;
