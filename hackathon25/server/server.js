import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { faL } from "@fortawesome/free-solid-svg-icons";

const app = express();
const PORT = 3000;

// Manually define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "data.json");

const matricole = JSON.parse(fs.readFileSync("matricole.json", "utf-8"));
const squadre = JSON.parse(fs.readFileSync("squadre.json", "utf-8"));

function createURL(){
    
}

function checkUserInTeam(matricola){
    squadre.array.forEach((squadra) => {
        if ((matricola in squadra.partecipanti)) {
            throw Error("Lo studente è già registrato in una squadra!");
        }
    });
    return true;
}

function checkTeamCode(){

}

app.use(express.json());

app.use(cors());

app.post("/createTeam", async (req, res) => {
	try {
		let matricola = req.body.matricola;
		let nomeSquadra = req.body.squadra;

		console.log(
			`[INFO]: Matricola: ${matricola} - Squadra: ${nomeSquadra}`
		);

		if (!(matricola in matricole)) {
            res.status(200).json({message:"Lo studente non è iscritto all'evento"})
        }
		
        try {
			checkUserInTeam(matricola);
		} catch (error) {
			res.status(200).json({message: `${error}`});
		}

        // cod: "Axfa01"

        // procediamo con la registrazione della squadra

		// const newData = req.body;
		// await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2));
		res.status(200).json({ message: "Squadra registrata", join_url:${createURL()} });

	} catch (error) {
		console.error("Error writing to file", error);
		res.status(500).json({ message: "Errore: squadra non registrata" });
	}
});

app.post("/joinTeam", async (req, res) => {
    try {
        // link richiesta: https://lab25a.it/joinTeam?codice_squadra=""
		let matricola = req.body.matricola;
		let codiceSquadra = req.body.codice_squadra;
    
    }catch(error){
		console.error("Error writing to file", error);
		res.status(500).json({ message: "Errore: squadra non registrata" });
    }
});

app.listen(PORT, () => {
	console.log(`Backend server: http://localhost:${PORT}`);
});
