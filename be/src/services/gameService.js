import * as gameRepository from "../repositories/gameRepository.js";

export const getAllGames = async () => {
    return await gameRepository.findGames();
};

export const getGameBySlug = async (slug) => {
    const game = await gameRepository.findGameBySlug(slug);
    if (!game) throw { statusCode: 404, message: "Game not found" };
    return game;
};
