import { Router } from "express";
import * as blogController from "../controllers/blogController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog management
 */

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: A list of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Blogs retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/", blogController.getAllBlogs);

/**
 * @swagger
 * /blogs/{slug}:
 *   get:
 *     summary: Get a blog by slug
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog slug
 *     responses:
 *       200:
 *         description: The blog details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Blog retrieved successfully
 *                 data:
 *                   type: object
 *       404:
 *         description: Blog not found
 */
router.get("/:slug", blogController.getBlogBySlug);

export default router;
