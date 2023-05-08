import express from 'express'

import {createItemContoller, readItemsController, readItemController, updateItemController, deleteItemController} from "../controllers"
import {authenticateUser} from "../middelware/checkIsAuth"

const router = express.Router()

//create
router.post("/", authenticateUser, createItemContoller)

//read
router.get("/", authenticateUser, readItemsController)
router.get("/:id", authenticateUser, readItemController)

//update
router.patch("/:id", authenticateUser, updateItemController)

//delete
router.delete("/:id", authenticateUser, deleteItemController)

export default router