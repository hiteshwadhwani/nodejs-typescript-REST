import { Request, Response, NextFunction, RequestHandler } from "express";

import {
  createItemService,
  readItemService,
  updateItemService,
  deleteItemService,
  readItemsService
} from "../services";

export const createItemContoller = (req:Request, res:Response, next:NextFunction) => createItemService(req, res, next)

export const readItemsController = (req:Request, res:Response, next:NextFunction) => readItemsService(req, res, next)

export const readItemController = (req:Request, res:Response, next:NextFunction) => readItemService(req, res, next)

export const updateItemController = (req:Request, res:Response, next:NextFunction) => updateItemService(req, res, next)

export const deleteItemController = (req:Request, res:Response, next:NextFunction) => deleteItemService(req, res, next)

