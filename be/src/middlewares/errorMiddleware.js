import { sendError } from "../utils/response.js";

const handlePrismaError = (err) => {
    let message = "Database error";
    let statusCode = 400;

    switch (err.code) {
        case 'P2002':
            message = `Duplicate field value: ${err.meta?.target}`;
            break;
        case 'P2014':
            message = `Invalid ID: ${err.meta?.target}`;
            break;
        case 'P2003':
            message = `Invalid input data: ${err.meta?.target}`;
            break;
        case 'P2025':
            message = `Record not found`;
            statusCode = 404;
            break;
    }

    return { statusCode, message };
};

export const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (err.code && err.code.startsWith('P2')) {
        const prismaErr = handlePrismaError(err);
        statusCode = prismaErr.statusCode;
        message = prismaErr.message;
    }

    // Add validation error handling if needed (e.g. from Joi or express-validator)
    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    }

    if (statusCode === 500) {
        console.error('ERROR 💥', err);
        message = "Something went wrong!";
    }

    sendError(res, statusCode, message);
};
