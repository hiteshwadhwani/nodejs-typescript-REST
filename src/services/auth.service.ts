import {
  Request,
  Response,
  RequestHandler,
  NextFunction,
  response,
} from "express";
import bcrypt from "bcrypt";
import prisma from "../libs/prisma";
import { User } from "@prisma/client";
import { generateToken } from "../utils/utils";

export const SignUpService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = await req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  res.status(201).json({ newUser });
  // res.json({name, email, hashedPassword})
};

export const LoginService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  // user not exists
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  try {
    const isMatch = await bcrypt.compare(
      password,
      user.hashedPassword as string
    );
    if (isMatch) {
      const token = generateToken(user);
      res.cookie("token", token, { httpOnly: true, secure: true });
      res.status(200).json({ token, message: "Logged In" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};
export const LogoutService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Successfully logged out 😏 🍀",
    });
  } catch (err) {
    res.json(401).json({
      success: false,
      message: err,
    });
  }
};
