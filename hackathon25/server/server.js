import dotenv from "dotenv"
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/students.js"
import teamRoutes from "./routes/teams.js"

dotenv.config();
connectDB();

// IL CODICE PER QUESTO SERVER https://i.imgflip.com/2reqtg.png?a485016
const app = express();
const PORT = 3000;

// Manually define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use('/api/students', studentRoutes);
app.use('/api/teams', teamRoutes);

app.listen(PORT, () => {
	console.log(`[INFO]: Backend server: http://localhost:${PORT}`);
});
