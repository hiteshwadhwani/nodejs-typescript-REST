import express from 'express'

import {createItemContoller, readItemsController, readItemController, updateItemController, deleteItemController} from "../controllers"

const router = express.Router()

//create
router.post("/", createItemContoller)

//read
router.get("/", readItemsController)
router.get("/:id", readItemController)

//update
router.patch("/:id", updateItemController)

//delete
router.delete("/:id", deleteItemController)

export default router