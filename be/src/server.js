import "dotenv/config";

import app from "./app.js";
import prisma from "../prisma/prisma.js";

// 1. Handle Uncaught Exceptions (Sync Errors)
process.on('uncaughtException', err => {
    console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.error(err.name, err.message);
    console.error(err.stack);
    process.exit(1);
});

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

let server;

async function startServer() {
    try {
        await prisma.$connect();
        console.log("✅ Database connected successfully");

        server = app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`🌱 Environment: ${ENV}`);
            console.log(`📖 Swagger API Docs available at http://localhost:${PORT}/api-docs`);
        });
    } catch (error) {
        console.error("❌ Database connection failed");
        console.error(error);
        process.exit(1);
    }
}

startServer();

// 2. Handle Unhandled Rejections (Async Promise Errors)
process.on('unhandledRejection', err => {
    console.error('UNHANDLED REJECTION! 💥 Shutting down gracefully...');
    console.error(err.name, err.message);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});