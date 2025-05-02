import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { faL } from "@fortawesome/free-solid-svg-icons";


// IL CODICE PER QUESTO SERVER https://i.imgflip.com/2reqtg.png?a485016
const app = express();
const PORT = 3000;

// Manually define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "data.json");

const matricole = JSON.parse(fs.readFileSync("matricole.json", "utf-8"));
const squadre = JSON.parse(fs.readFileSync("squadre.json", "utf-8"));

function checkUserInTeam(matricola){
    
    squadre.forEach((squadra) => {
        console.log(squadra.partecipanti)
        squadra.partecipanti.forEach( (mat) =>{
                if(mat === matricola)
                throw Error("Lo studente è già registrato in una squadra!");
            }
        )
    })
    return true;
}

function createTeamCode(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        code += chars[randomIndex];
    }
    if( code in squadre) {
        return checkTeamCode;
    }
    return code;
    
}

app.use(express.json());

app.use(cors());

app.post("/create_team", async (req, res) => {
	try {
		let matricola = req.body.matricola;
		let nomeSquadra = req.body.squadra;

		console.log(
			`[INFO]: Matricola: ${matricola} - Squadra: ${nomeSquadra}`
		);


        //La matricola non è di 7 cifre o il nome della squadra è più di 15 Caratteri
        if(matricola.length != 7 || nomeSquadra.length > 15 || nomeSquadra.length < 3){
            return res.status(400).json({message:"Richiesta non valida"});
        }

        //Controlla se la matricola è presente tra gli iscritti all'hackathon
		if (!(matricola in matricole)) {
            return res.status(404).json({message:"La matricola fornita non è iscritta all'evento"})
        }
		
        //Controlla se la matricola è già presente in una squadra
        try {
			checkUserInTeam(matricola);
		} catch (error) {
            console.log("Matricola già registrata in una squadra")
			return res.status(409).json({message: `${error.message}`});
		}

        let code = createTeamCode();
		const newData = {
            id:code,
            nome_squadra: nomeSquadra,
            partecipanti: [matricola]
        };

        let url = `https://lab25a.it/unisciti?code=${code}`
		
        squadre.push(newData);
        let sq = JSON.stringify(squadre)
        await fs.writeFile('squadre.json', sq, 'utf8', ()=>{});
		return res.status(200).json({ message: "Squadra registrata con successo", join_url:url});

	} catch (error) {
		console.error("Error writing to file", error);
		return res.status(500).json({ message: "Errore: Squadra non registrata" });
	}
});

app.get("/get_team", async (req, res) => {
    // link richiesta: https://lab25a.it/join_team?codice_squadra=""
    
    // return res.status(404).json({ message: "Errore: squadra non esistente" });
    const code = req.query.code;
    if(code === undefined) {
        return res.status(400).json({ message: "Errore: richiesta invalida" });
    }
    console.log(`[INFO]: Codice: ${code}`);

    const team = squadre.find((t) => t.id === code);
    if(team === undefined) {
        return res.status(404).json({ message: "Errore: squadra non esistente" });
    }
    console.log(`[INFO] ${JSON.stringify(team)}`);
    return res.status(200).json(team);

   
});

app.post("/join_team", async (req, res) => {
    try {
        // link richiesta: https://lab25a.it/join_team?cide=""

		let matricola = req.body.matricola;
		let codiceSquadra = req.body.code;
        
        
        if(matricola.length != 7){
            return res.status(400).json({message:"Richiesta non valida"});
        }

        const team = squadre.find((t) => t.id === code);
        if(team === undefined) {
            return res.status(404).json({ message: "Errore: squadra non esistente" });
        }

        //Controlla se la matricola è presente tra gli iscritti all'hackathon
		if (!(matricola in matricole)) {
            return res.status(404).json({message:"La matricola fornita non è iscritta all'evento"})
        }
		
        //Controlla se la matricola è già presente in una squadra
        try {
			checkUserInTeam(matricola);
		} catch (error) {
            console.log("Matricola già registrata in una squadra")
			return res.status(409).json({message: `${error.message}`});
		}
    
    }catch(error){
		console.error("Error writing to file", error);
		res.status(500).json({ message: "Errore: squadra non registrata" });
    }
});

app.listen(PORT, () => {
	console.log(`Backend server: http://localhost:${PORT}`);
});
