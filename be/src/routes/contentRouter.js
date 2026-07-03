import { Router } from "express";
import * as contentController from "../controllers/contentController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Content Classifications
 *   description: Content Classification management
 */

/**
 * @swagger
 * /content-classifications:
 *   get:
 *     summary: Get all content classifications
 *     tags: [Content Classifications]
 *     responses:
 *       200:
 *         description: A list of content classifications
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
 *                   example: Content classifications retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/", contentController.getAllContents);

/**
 * @swagger
 * /content-classifications/{id}:
 *   get:
 *     summary: Get a content classification by ID
 *     tags: [Content Classifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Content Classification ID
 *     responses:
 *       200:
 *         description: The content classification details
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
 *                   example: Content classification retrieved successfully
 *                 data:
 *                   type: object
 *       404:
 *         description: Content classification not found
 */
router.get("/:id", contentController.getContentById);

export default router;
