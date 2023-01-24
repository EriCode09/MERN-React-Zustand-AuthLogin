"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Anres de poder proporcinar la informacion del perfil necesitamos
 * validar que el usuario esta authentificado, para ello hemos creado
 * la siguiente funcion
 */
const requireAuth = (req, res, next) => {
    // Identificador de cabecera
    const authHeader = req.headers.authorization;
    // Si no existe este identificador denegamos la peticion pasadole un error 401 y enviando mediante json el mensaje de "Desautorizado"
    if (!authHeader)
        return res.status(401).json({
            message: "Unauthorize!"
        });
    const token = authHeader.split(' ')[1]; // Recogemos el token mediante el metodo split.
    /**
     *  Ya que el req.headers.authorization se muestra por convencion del
     *  siguiente modo "Bearer 12903812931suiqw", "bearer" no tiene nada
     *  que ver coon el token, por ello lo que hacemos con el metodo split
     *  es separarlo (Mediante el espacio que hay entre ambos) del token
     *  que es el string que se situa a su derecha.
     */
    // Validacion para comprobar si el token esta vacio
    if (!token)
        return res.status(401).json({
            message: "Unauthorize!"
        });
    // Aqui verificamos mediante JWT que el token ha sido creado por nuestro sistema
    jsonwebtoken_1.default.verify(token, 'secret', (err, user) => {
        /**
         * Si se genera un error significa que no se ha podido verificar
         * correctamente por lo que devolvemos el mismo status que antes
         * "Unauthorized!"
         */
        if (err)
            return res.status(401).json({
                message: "Unauthorize!"
            });
        // Si, si no se produce un error significa que se ha podido verificar
        // Por lo que tenemos los datos del usuario.
        /**
         * Ahora como pacticamente todas las peticiones son mediante
         * express, podemos compartir este dato asignadolo como un dato
         * personalizado por lo que las demas funciones que utilizen express
         * podran acceder a este valor.
         */
        req.user = user;
        /**
         * Importantisimo este next para que podamos continuar con
         * la ejecucion de la funcion prfileHandler despues de haber
         * podido validar correctamente la autenticacion
         *
         * router.get('/profile', requireAuth, profileHandler )
         *
         *
         * (En caso de que no estubiera, la perticion get lo unico que
         * haria seria hacer la validacion y omitir la funcion siguiente)
         */
        next();
    });
};
exports.requireAuth = requireAuth;
