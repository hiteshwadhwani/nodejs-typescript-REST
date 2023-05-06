import {Request, Response, RequestHandler, NextFunction} from 'express'

export const createItemService = async (req:Request, res:Response, next:NextFunction) => {
    const {name, email, password} = req.body;
}

export const readItemService = (req: Request, res:Response, next:NextFunction) => {

}


export const readItemsService = (req: Request, res:Response, next:NextFunction) => {

}

export const updateItemService = (req: Request, res:Response, next:NextFunction) => {

}

export const deleteItemService = (req: Request, res:Response, next:NextFunction) => {

} 