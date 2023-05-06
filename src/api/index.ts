import express from "express"

import indexRoutes from "../routes/index"
import userRoutes from "../routes/auth.route"
import itemsRoutes from "../routes/items.route"

const router = express.Router()

router.use("/", indexRoutes)
router.use("/user", userRoutes)
router.use("/post", itemsRoutes)

export default router

