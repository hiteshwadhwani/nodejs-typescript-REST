import morgan from "morgan";
import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";

const loggerPath = path.join("src", "logger");

try {
  fs.access(loggerPath, fs.constants.R_OK, (error) => {
    if (error) {
      fs.mkdir(loggerPath, (error) => {
        if (error) console.log("not able to create dir");
      });
    }
  });
} catch (error) {
  console.log(error);
}

const accessLogStream = fs.createWriteStream(
  path.join(loggerPath, "access.log"),
  { flags: "a" }
);

export const logger = morgan("combined", { stream: accessLogStream });

export const logRequestData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger(req, res, next);
};
