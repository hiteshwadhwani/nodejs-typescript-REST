import { Request, Response, RequestHandler, NextFunction } from "express";
import { AuthRequest } from "../interfaces/requestInterface";
import prisma from "../libs/prisma";
import { describe } from "node:test";

export const createItemService = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // create 1 item
  const { name, description } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      id: req.user?.id,
    },
  });
  if (!user) {
    return res.status(401).json({
      success: false,
      msg: "not Authorized",
    });
  }
  const newItem = await prisma.items.create({
    data: {
      name: name,
      description: description,
      userId: user.id,
    },
  });

  return res.status(200).json({
    success: true,
    newItem,
  });
};

export const readItemService = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const item = await prisma.items.findUnique({
      where: {
        id: id as string,
      },
    });
    if (!item) {
      return res.status(400).json({
        success: false,
        description: "No item found",
      });
    }
    return res.status(200).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      description: error,
    });
  }
};

export const readItemsService = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // read all items from db
  try {
    const allItems = await prisma.items.findMany();
    return res.status(201).json({
      success: true,
      allItems,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      description: error,
    });
  }
};

export const updateItemService = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // update 1 item from db

  try {
    const id = req.params.id;
    const item = await prisma.items.findUnique({
      where: {
        id: id,
      },
    });
    if (!item) {
      return res.status(400).json({
        success: false,
        description: "No item found",
      });
    }
    const updatedFields = req.body;

    const newitemData = {
      name: updatedFields.name || item.name,
      description: updatedFields.description || item.description,
    };

    const newItem = await prisma.items.update({
      where: {
        id: item.id,
      },
      data: {
        name: newitemData.name,
        description: newitemData.description,
      },
    });

    return res.status(200).json({
      success: true,
      newItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      description: "internal server error",
    });
  }
};

export const deleteItemService = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  // delete 1 item from db

  try {
    const id = req.params.id;
    const deleteItem = await prisma.items.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      success: true,
      desription: "Item successfully deleted",
      deleteItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      description: "internal server error",
    });
  }
};
