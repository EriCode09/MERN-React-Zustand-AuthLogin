import { Router } from "express";
import {loginHandler, profileHandler} from '../controllers/auth.controller'
import {requireAuth} from '../middlewares/requireAuth';

const router = Router()

router.post('/login', loginHandler)

// Para poder obtener informacion del perfil primero validamos la authentificacion y luego mostramos los datos
router.get('/profile', requireAuth, profileHandler)

export default router