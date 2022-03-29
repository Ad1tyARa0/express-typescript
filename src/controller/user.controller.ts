import { Request, Response } from "express";
import logger from "../utils/logger";

export const createUserHandler = (req: Request, res: Response) => {
  try {
    // call create user service.
    // const  user = await
  } catch (error: any) {
    logger.error(error);

    return res.status(409).send(error.message);
  }
};
