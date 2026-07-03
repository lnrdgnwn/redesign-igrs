import { Router } from "express";
import * as ratingController from "../controllers/ratingController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: Rating management
 */

/**
 * @swagger
 * /ratings:
 *   get:
 *     summary: Get all ratings
 *     tags: [Ratings]
 *     responses:
 *       200:
 *         description: A list of ratings
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
 *                   example: Ratings retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/", ratingController.getAllRatings);

/**
 * @swagger
 * /ratings/{id}:
 *   get:
 *     summary: Get a rating by ID
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Rating ID
 *     responses:
 *       200:
 *         description: The rating details
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
 *                   example: Rating retrieved successfully
 *                 data:
 *                   type: object
 *       404:
 *         description: Rating not found
 */
router.get("/:id", ratingController.getRatingById);

export default router;
