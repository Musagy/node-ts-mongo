import express from "express";
import tasksRouter from "./routes/videos";

const app = express();
app.use(express.json()); // middleware que transforma el body de la petición en un objeto json

app.use("/videos",tasksRouter);

export default app;
