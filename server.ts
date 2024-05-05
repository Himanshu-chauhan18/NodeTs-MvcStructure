import express from "express";
import Main from "./src/main";
import ServerConfig from "./config/server.config";
const app = express();
const PORT = process.env.PORT || 3333

Main.configureRoutes(app);
ServerConfig.HandleInvalidRoute(app)
ServerConfig.start(app,PORT)