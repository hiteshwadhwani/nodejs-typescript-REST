
import { Request } from "express";
import {Prisma, User} from '@prisma/client'

export interface AuthRequest extends Request{
    cookies : {token ?: string}
    // user?: Prisma.Prisma__UserClient<User | null>
    token ?: string
    user?: User
}

