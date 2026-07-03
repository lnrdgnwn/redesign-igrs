import prisma from "../../prisma/prisma.js";

export const findContents = async () => {
    return await prisma.contentClassification.findMany({
        include: { rating: true }
    });
};

export const findContentById = async (id) => {
    return await prisma.contentClassification.findUnique({ 
        where: { id },
        include: { rating: true }
    });
};
