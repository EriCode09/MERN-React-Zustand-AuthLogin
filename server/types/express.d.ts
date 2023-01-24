/**
 * Extension .d.ts se refiere a un document el cual como objetivo tiene
 * tipar datos que pueden aparecer en ciertos componentes, por lo que este
 * archivo esta dedicado a tipar en concreto los datos que contrendra el
 * dato que hemos creado en req.user
 */

/**
 * Decoaramos que dentro de la espacio "Express" creamos y importamos
 * una itnterfice Request en la cual tipamos el dato user.
 */
declare namespace Express {
    export interface Request{
        user: any
    }
}