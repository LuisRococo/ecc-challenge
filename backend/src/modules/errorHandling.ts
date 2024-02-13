import { NextFunction, Request, Response } from 'express';
import { formatResponseError } from './responseHelpers';

/*
    DOCUMENTATION
    Whenever an error is throwed on an async function, express will not be able to catch that error
    and that will make the app crash.
    
    "catchAsync" is used to catch errors generated on async function and makes express or you handle
    the errors using middleware.
*/

export const catchAsync = (callback: any) => {
  return function (req: any, res: any, next: any) {
    callback(req, res, next).catch((error: Error) => {
      next(error);
    });
  };
};

export class CustomError extends Error {
  constructor(
    public message: string,
    public status: number = 500
  ) {
    super(message);
    this.status = status;
  }
}

export const errorHandlingMiddleware = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errorMessage =
    error instanceof CustomError ? error.message : 'Internal Server Error';

  const status = error instanceof CustomError ? error.status : 500;

  response.status(status).send(formatResponseError(errorMessage));
};
