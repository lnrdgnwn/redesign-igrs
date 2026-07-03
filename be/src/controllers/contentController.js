import * as contentService from "../services/contentService.js";
import { sendSuccess } from "../utils/response.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getAllContents = asyncHandler(async (req, res) => {
    const contents = await contentService.getAllContents();
    sendSuccess(res, 200, "Content classifications retrieved successfully", contents);
});

export const getContentById = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const content = await contentService.getContentById(id);
    sendSuccess(res, 200, "Content classification retrieved successfully", content);
});
