import prisma from "../../prisma/prisma.js";

export const findGames = async () => {
    return await prisma.game.findMany({
        include: { rating: true, gallery: true }
    });
};

export const findGameBySlug = async (slug) => {
    return await prisma.game.findUnique({ 
        where: { slug },
        include: { rating: true, gallery: true }
    });
};
