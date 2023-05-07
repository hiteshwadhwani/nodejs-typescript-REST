import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import prisma from "../libs/prisma"
import {User} from '@prisma/client'
import envConfig from "../config/env.config"
import {AuthRequest} from "../interfaces/requestInterface"

export const authenticateUser = async (req:AuthRequest, res:Response, next:NextFunction) => {
    const token = req.cookies.token;

    //if token is not available
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try{
        await jwt.verify(token, envConfig.ACCESS_TOKEN_SECRET_KEY as jwt.Secret, async (err: Error | null, decodedUser: any) => {
            if(err){
                return res.status(401).json({message:"Unauthorized"})
            }
            try{
                const decodedUserinDB = prisma.user.findUnique({
                    where:{
                        id: decodedUser.id as string
                    }
                })
                if(!decodedUserinDB){
                    return res.status(401).json({message:"Unauthorized"})
                }
                req.user = decodedUserinDB
                next()
            }
            catch(error){
                return res.status(401).json({message:"Unauthorized"})
            }
        });
    }
    catch(error){
        return res.status(401).json({message:"Unauthorized"})
    }
}

export default {authenticateUser}