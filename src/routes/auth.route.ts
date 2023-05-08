import express from 'express'

import {signUpController, loginController, logoutController} from "../controllers"
import {authenticateUser} from "../middelware/checkIsAuth"
const router = express.Router()

router.post("/signup", signUpController)
router.post("/login", loginController)
router.post("/logout",authenticateUser , logoutController)

export = router