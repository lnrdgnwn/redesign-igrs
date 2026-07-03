import express from "express";
import cors from 'cors';
import { swaggerUi, swaggerSpec } from "./config/swagger.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// Import Routers
import blogRouter from "./routes/blogRouter.js";
import gameRouter from "./routes/gameRouter.js";
import ratingRouter from "./routes/ratingRouter.js";
import contentRouter from "./routes/contentRouter.js";

// Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/assets', express.static('public/assets'));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/blogs', blogRouter);
app.use('/api/games', gameRouter);
app.use('/api/ratings', ratingRouter);
app.use('/api/content-classifications', contentRouter);

// 404 Handler
app.use((req, res, next) => {
    next({ statusCode: 404, message: `Can't find ${req.originalUrl} on this server!` });
});

// Global Error Handler
app.use(errorMiddleware);
export default app;