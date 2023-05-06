import express from 'express'

import {signUpController, loginController, logoutController} from "../controllers"

const router = express.Router()

router.post("/signup", signUpController)
router.post("/login", loginController)
router.post("/logout", logoutController)

export default router