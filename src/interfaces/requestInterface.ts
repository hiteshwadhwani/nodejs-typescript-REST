
import { Request } from "express";
import {Prisma, User} from '@prisma/client'

export interface AuthRequest extends Request{
    req: any;
    cookies : {token ?: string}
    user?: Prisma.Prisma__UserClient<User | null>
}

