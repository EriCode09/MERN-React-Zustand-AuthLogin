import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req: Request, res: Response) => {

// Lo que deberiamos de hacer sin JsonWebToken

// req.body = {email: dasdasda@dasdad, password:3234234}
// validation, express-validator, joi, zod
// store in db - mongodb
// generate token - weqweqweqweqweqweqweqw

const token = jwt.sign({
    test: 'test', // Datos que se le piden al user
}, 'secret', {
expiresIn: 60 * 60 * 24 // Asiganmos expiración del token en 24h (60s * 60m * 24h)
})

return res.json({
    token,
    message: "Token has been created!"
})

}

export const profileHandler = (req: Request, res: Response) => {
    return res.json({
        profile: req.user,
        message: "profile data loaded!"
        
    })
}