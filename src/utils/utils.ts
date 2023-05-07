import {User} from "@prisma/client"
import jwt, { Secret } from "jsonwebtoken";
import environmentConfig from "../config/env.config"

export const generateToken = (user: User) => {
    const payload = {sub : user.id};
    console.log(environmentConfig.ACCESS_TOKEN_SECRET_KEY)
    return jwt.sign(payload, environmentConfig.ACCESS_TOKEN_SECRET_KEY as Secret)
}