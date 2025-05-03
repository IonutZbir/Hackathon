"use strict";

/*

In questo file troverai tutte le funzioni necessarie per prendere i dati dal "database". Per adesso il database
è implementato usando 2 file:
1. "matricole.json" per memorizzare ciascun studente iscritto
2. "squadre.json" per memorizzare le squadre

*/

const STUDENTS_PATH = "students.json";
const TEAMS_PATH = "teams.json";
const ID_LEN = 6;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const students = JSON.parse(fs.readFileSync(STUDENTS_PATH, "utf-8"));
const teams = JSON.parse(fs.readFileSync(TEAMS_PATH, "utf-8"));

function getStudents(toString) {
	/*
        @param: toString, if true then return JSON.stringify(students)
    */

	if (students === undefined) {
		return false;
	}

	return toString ? JSON.stringify(students) : students;
}

function getStudentById(id, toString) {
	/*
        @param: id
        @param: toString, if true then return JSON.stringify(students)
    */

	if (id === undefined) {
		return false;
	}

	const stud = students[id];

	if (stud === undefined) {
		return false;
	}

	return toString ? JSON.stringify(stud) : stud;
}

function getTeams(toString) {
	/*
        @param: toString, if true then return JSON.stringify(students)
    */

	if (teams === undefined) {
		return false;
	}

	return toString ? JSON.stringify(teams) : teams;
}

function getTeamById(id, toString) {
	/*
        @param: id
        @param: toString, if true then return JSON.stringify(students)
    */

	if (id === undefined) {
		return false;
	}

	const team = squadre.find((t) => t.id === id);

	if (team === undefined) {
		return false;
	}

	return toString ? JSON.stringify(team) : team;
}

function checkUserInTeam(id) {
	/*
        @param: id
        @return: returns true if the student is already in a team, false otherwise
    */

	teams.forEach((t) => {
		t.partecipanti.forEach((mat) => {
			if (mat === id) return true;
		});
	});
	return false;
}

function createTeamCode() {
	
    /*
        teams.json:
        {
            code1: {
                name: ""
                members: []
            },
            code2: {
                name: ""
                members: []
            }
        }
    */

	let code = "";
	for (let i = 0; i < ID_LEN; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		code += chars[randomIndex];
	}
	if (code in teams) {
		return createTeamCode();
	}
	return code;
}
