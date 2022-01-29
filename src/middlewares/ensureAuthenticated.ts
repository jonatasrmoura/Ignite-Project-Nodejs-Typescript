import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  // Bearer f321231sdfsafafd5
  // [0] = Bearer
  // [1] = f321231sdfsafafd5
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "f57208dc433b16fc5d685fef83001e80");
    
    const usersRepository = new UsersRepository();
    
    const user = await usersRepository.findById(String(user_id));

    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token!");
  }
}
