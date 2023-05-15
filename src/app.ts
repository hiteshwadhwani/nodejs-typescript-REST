// Import all the dependecies
import express, {Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import YAML from "yamljs";
import SwaggerUI from "swagger-ui-express";

//Import Routes
import api from "./api/index";

// Import middelwares
import {logRequestData} from "./middelware/logger"

const swaggerDocument = YAML.load(`${process.cwd()}/swagger/swagger.yaml`);

// access environment variables
dotenv.config();

//initialize app with express
const app: Express | undefined = express();

//Load app middelware
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

// Serve all static files inside public directory
app.use("/static", express.static("public"));

app.use(logRequestData)

//Routes handeling the request
app.use("/", api);
// app.use()
// app.use(errorHandlerMiddelware)

export default app;
