import { Router } from "express";
import * as gameController from "../controllers/gameController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Games
 *   description: Game management
 */

/**
 * @swagger
 * /games:
 *   get:
 *     summary: Get all games
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: A list of games
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
 *                   example: Games retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/", gameController.getAllGames);

/**
 * @swagger
 * /games/{slug}:
 *   get:
 *     summary: Get a game by slug
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Game slug
 *     responses:
 *       200:
 *         description: The game details
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
 *                   example: Game retrieved successfully
 *                 data:
 *                   type: object
 *       404:
 *         description: Game not found
 */
router.get("/:slug", gameController.getGameBySlug);

export default router;
