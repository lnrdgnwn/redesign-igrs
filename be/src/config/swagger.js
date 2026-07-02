import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REDESIGN IGRS API",
            version: "1.0.0",
            description: "API Documentation for IGRS Backend",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Development"
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi, swaggerSpec };