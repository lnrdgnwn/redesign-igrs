import * as blogRepository from "../repositories/blogRepository.js";

export const getAllBlogs = async () => {
    return await blogRepository.findBlogs();
};

export const getBlogBySlug = async (slug) => {
    const blog = await blogRepository.findBlogBySlug(slug);
    if (!blog) throw { statusCode: 404, message: "Blog not found" };
    return blog;
};
