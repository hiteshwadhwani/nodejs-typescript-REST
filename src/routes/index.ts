import express, {Request, Response} from 'express'

const router = express.Router();

router.get("/test", (req:Request, res:Response) : void => {
    res.send("testing API")
})

export default router