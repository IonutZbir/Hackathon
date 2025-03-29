import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Manually define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "data.json");

app.use(express.json());

app.put("/aggiungi", async (req, res) => {
    try {
        const newData = req.body;
        await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2));
        res.json({ message: "Squadra registrata" });
    } catch (error) {
        console.error("Error writing to file", error);
        res.status(500).json({ message: "Errore: squadra non registrata" });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server: http://localhost:${PORT}`);
});
