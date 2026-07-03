import * as ratingService from "../services/ratingService.js";
import { sendSuccess } from "../utils/response.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getAllRatings = asyncHandler(async (req, res) => {
    const ratings = await ratingService.getAllRatings();
    sendSuccess(res, 200, "Ratings retrieved successfully", ratings);
});

export const getRatingById = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const rating = await ratingService.getRatingById(id);
    sendSuccess(res, 200, "Rating retrieved successfully", rating);
});
