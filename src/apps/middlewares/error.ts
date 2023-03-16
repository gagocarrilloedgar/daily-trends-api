/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import httpStatus from 'http-status';

import { AppError } from '../../context/Shared/domain/AppError';
import config from '../../context/Shared/infrastructure/config';

export const errorConverter = (err: any, _req: any, _res: any, next: any): any => {
  let error = err;
  const isErrorInstance = error instanceof AppError;
  if (!isErrorInstance) {
    const statusCode = httpStatus.BAD_REQUEST;
    const message = error.message || httpStatus[statusCode];
    error = new AppError(message as string, err.stack);
  }
  next(error);
};

export const errorHandler = (err: any, _req: any, res: any, _next: any) => {
  let { statusCode, message } = err;
  if (config.isProduction && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(!config.isProduction && { stack: err.stack })
  };

  if (!config.isProduction) console.error(err);

  res.status(statusCode).json({ error: response });
};
