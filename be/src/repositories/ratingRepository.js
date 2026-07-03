import prisma from "../../prisma/prisma.js";

export const findRatings = async () => {
    return await prisma.rating.findMany({
        include: { games: true, content_classifications: true }
    });
};

export const findRatingById = async (id) => {
    return await prisma.rating.findUnique({ 
        where: { id },
        include: { games: true, content_classifications: true }
    });
};
