import * as ratingRepository from "../repositories/ratingRepository.js";

export const getAllRatings = async () => {
    return await ratingRepository.findRatings();
};

export const getRatingById = async (id) => {
    const rating = await ratingRepository.findRatingById(id);
    if (!rating) throw { statusCode: 404, message: "Rating not found" };
    return rating;
};
