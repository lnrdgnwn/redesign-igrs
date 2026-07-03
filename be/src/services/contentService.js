import * as contentRepository from "../repositories/contentRepository.js";

export const getAllContents = async () => {
    return await contentRepository.findContents();
};

export const getContentById = async (id) => {
    const content = await contentRepository.findContentById(id);
    if (!content) throw { statusCode: 404, message: "Content classification not found" };
    return content;
};
