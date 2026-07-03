import * as gameService from "../services/gameService.js";
import { sendSuccess } from "../utils/response.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getAllGames = asyncHandler(async (req, res) => {
    const games = await gameService.getAllGames();
    sendSuccess(res, 200, "Games retrieved successfully", games);
});

export const getGameBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const game = await gameService.getGameBySlug(slug);
    sendSuccess(res, 200, "Game retrieved successfully", game);
});
