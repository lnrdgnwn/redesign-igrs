import * as blogService from "../services/blogService.js";
import { sendSuccess } from "../utils/response.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await blogService.getAllBlogs();
    sendSuccess(res, 200, "Blogs retrieved successfully", blogs);
});

export const getBlogBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const blog = await blogService.getBlogBySlug(slug);
    sendSuccess(res, 200, "Blog retrieved successfully", blog);
});
