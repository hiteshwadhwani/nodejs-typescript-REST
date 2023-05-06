import {Request, Response, RequestHandler, NextFunction, response} from 'express'
import bcrypt from "bcrypt"
import prisma from "../libs/prisma"



export const SignUpService = async (req:Request, res:Response, next:NextFunction) => {
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await prisma.user.create({
        data:{
            name, email, hashedPassword
        }
    })
    res.status(201).json({newUser})
}

export const LoginService = (req: Request, res:Response, next:NextFunction) => {

}
export const LogoutService = (req: Request, res:Response, next:NextFunction) => {

} 