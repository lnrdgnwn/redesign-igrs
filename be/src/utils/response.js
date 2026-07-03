export const sendResponse = (res, statusCode, success, message, data = null) => {
    const responseData = {
        success,
        message
    };

    if (data !== null) {
        responseData.data = data;
    }

    res.status(statusCode).json(responseData);
};

export const sendSuccess = (res, statusCode, message, data = null) => {
    sendResponse(res, statusCode, true, message, data);
};

export const sendError = (res, statusCode, message) => {
    sendResponse(res, statusCode, false, message);
};
