"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
router.post('/login', auth_controller_1.loginHandler);
// Para poder obtener informacion del perfil primero validamos la authentificacion y luego mostramos los datos
router.get('/profile', requireAuth_1.requireAuth, auth_controller_1.profileHandler);
exports.default = router;
