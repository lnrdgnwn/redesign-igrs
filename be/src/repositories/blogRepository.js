import prisma from "../../prisma/prisma.js";

export const findBlogs = async () => {
    return await prisma.blog.findMany();
};

export const findBlogBySlug = async (slug) => {
    return await prisma.blog.findUnique({ where: { slug } });
};
