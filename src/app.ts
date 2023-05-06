// Import all the dependecies
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import  cookieParser  from 'cookie-parser'

//Import Routes
import api from "./api/index"


// Import middelwares


// access environment variables
dotenv.config()

//initialize app with express
const app: express.Application | undefined = express()

//Load app middelware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(cors());

// Serve all static files inside public directory
app.use('/static', express.static('public'));

//Routes handeling the request
app.use("/", api)
// app.use()
// app.use(errorHandlerMiddelware)

export default app
