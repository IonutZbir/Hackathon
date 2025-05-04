"use strict";

import Student from "../models/student.js";
import Team from "../models/team.js";

// GET /api/teams

export async function getTeams(req, res) {
	try {
	  const teams = await Team.find().populate('members');
  
	  const formatted = teams.map(team => ({
		_id: team._id,
		name: team.name,
		members: team.members.map(m => `${m.name} ${m.surname}`)
	  }));
  
	  res.json(formatted);
	} catch (err) {
	  res.status(500).json({ message: 'Error fetching teams', error: err });
	}
  }
  

// GET /api/teams/?code=

export async function getTeamById(req, res) {
	const code = req.params.code;

	if (!code || code === "undefined") {
		return res.status(400).json({ message: "Errore: richiesta invalida" });
	}

	const team = await Team.findById(code);
	if (team) {
		res.json(team);
	} else {
		res.status(404).json({ error: "Errore: squadra non esistente" });
	}
}

// POST /api/teams/create

export async function createTeam(req, res) {
	const studentId = req.body.matricola;
	const teamName = req.body.squadra;

	// La matricola non è di 7 cifre
	if (studentId.length != 7) {
		return res
			.status(400)
			.json({ message: "La matricola deve essere di 7 cifre" });
	}

	// Il nome della squadra è più di 15 caratteri
	if (teamName.length > 15) {
		return res.status(400).json({
			message: "Il nome della squadra non può superare i 15 caratteri",
		});
	}

	// Il nome della squadra è meno di 3 caratteri
	if (teamName.length < 3) {
		return res.status(400).json({
			message: "Il nome della squadra deve essere di almeno 3 caratteri",
		});
	}

	// Controlla se la matricola è presente tra gli iscritti all'hackathon
	const student = await Student.findById(studentId);
	if (!student) {
		return res.status(404).json({
			message:
				"Lo studente con la matricola fornita non è iscritto all'evento",
		});
	}

	// Controlla se la matricola è già presente in una squadra
	try {
		await checkMemberInTeam(studentId);
	} catch (error) {
		return res.status(409).json({ message: `${error.message}` });
	}

	let code = await createTeamCode();
	const newTeam = new Team({
		_id: code,
		name: teamName,
		members: [studentId],
	});
	await newTeam.save();

	let link = process.env.SERVER_IP + `/join?code=${code}`;
	return res
		.status(200)
		.json({ message: "Squadra registrata con successo", join_url: link });
}

// POST /api/join

export async function joinTeam(req, res) {
	let studentId = req.body.matricola;
	let teamCode = req.body.code;

	// La matricola non è di 7 cifre
	if (studentId.length != 7) {
		return res
			.status(400)
			.json({ message: "La matricola deve essere di 7 cifre" });
	}

	// Controlla se la matricola è presente tra gli iscritti all'hackathon
	const student = await Student.findById(studentId);
	if (!student) {
		return res.status(404).json({
			message:
				"Lo studente con la matricola fornita non è iscritto all'evento",
		});
	}

	const team = await Team.findById(teamCode);
	if (!team) {
		res.status(404).json({ message: "Errore: squadra non esistente" });
	}

	try {
		await checkMemberInTeam(studentId);
	} catch (error) {
		return res.status(409).json({ message: `${error.message}` });
	}

    if (team.members.length === 4) {
		return res.status(409).json({ message: "Errore: squadra al completo" });
	}

    team.members.push(studentId);
    await team.save();

    return res.status(200).json({
        message: "Ti sei unito alla squadra con successo!",
        team: team,
    });
}

/*
    UTILITY FUNCTIONS
*/

async function checkMemberInTeam(id) {
	const team = await Team.findOne({ members: id });

	if (team) {
		throw Error("Lo studente è già registrato in una squadra!");
	}
}

async function createTeamCode() {
	const ID_LEN = 6;
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let code = "";
	for (let i = 0; i < ID_LEN; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		code += chars[randomIndex];
	}

	const team = await Team.findById(code);

	if (team) {
		return createTeamCode();
	}
	return code;
}
