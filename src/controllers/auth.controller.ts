import { Request, Response, NextFunction, RequestHandler } from "express";

import {
    SignUpService, LoginService, LogoutService
} from "../services"


export const signUpController = (req:Request, res:Response, next:NextFunction) => SignUpService(req, res, next)

export const loginController = (req:Request, res:Response, next:NextFunction) => LoginService(req, res, next)

export const logoutController = (req:Request, res:Response, next:NextFunction) => LogoutService(req, res, next)