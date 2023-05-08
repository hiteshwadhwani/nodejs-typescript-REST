import { Request, Response, NextFunction, RequestHandler } from "express";

import {
  createItemService,
  readItemService,
  updateItemService,
  deleteItemService,
  readItemsService
} from "../services";

import {AuthRequest} from "../interfaces/requestInterface"

export const createItemContoller = (req:AuthRequest, res:Response, next:NextFunction) => createItemService(req, res, next)

export const readItemsController = (req:AuthRequest, res:Response, next:NextFunction) => readItemsService(req, res, next)

export const readItemController = (req:AuthRequest, res:Response, next:NextFunction) => readItemService(req, res, next)

export const updateItemController = (req:AuthRequest, res:Response, next:NextFunction) => updateItemService(req, res, next)

export const deleteItemController = (req:AuthRequest, res:Response, next:NextFunction) => deleteItemService(req, res, next)

