"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
    // Lo que deberiamos de hacer sin JsonWebToken
    // req.body = {email: dasdasda@dasdad, password:3234234}
    // validation, express-validator, joi, zod
    // store in db - mongodb
    // generate token - weqweqweqweqweqweqweqw
    const token = jsonwebtoken_1.default.sign({
        test: 'test', // Datos que se le piden al user
    }, 'secret', {
        expiresIn: 60 * 60 * 24 // Asiganmos expiración del token en 24h (60s * 60m * 24h)
    });
    return res.json({
        token
    });
};
exports.loginHandler = loginHandler;
const profileHandler = (req, res) => {
};
exports.profileHandler = profileHandler;
