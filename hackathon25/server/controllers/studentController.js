"use strict";

import fs from "fs";
import Student from "../models/student.js";

export async function addStudentsFromFile() {
	const students = JSON.parse(
		fs.readFileSync(process.env.STUDENTS_PATH, "utf-8")
	);
	for (const [key, stud] of Object.entries(students)) {
		console.log(
			`Matricola: ${key}, Nome: ${stud.nome}, Cognome: ${stud.cognome}, Email: ${stud.email}`
		);
		try {
			await Student.create({
				_id: key,
				name: stud.nome,
				surname: stud.cognome,
				email: stud.email,
			});
		} catch (err) {
			console.error(`Errore per lo studente ${key}:`, err.message);
		}
	}
}

// GET /students

export async function getStudents(req, res) {
	const students = await Student.find();
	res.json(students);
}

// GET /students/:id

export async function getStudentById(req, res) {
	const id = req.params.id;
	const stud = await Student.findById(id);
	if (stud) {
		res.json(stud);
	} else {
		res.status(404).json({ message: "Student not found" });
	}
}

// GET /students/count

export async function countStudents(req, res) {
    const count = await Student.countDocuments();
    res.json({count: count});
}

// POST /students

export async function createStudent(req, res) {

	const _id = req.body.matricola;
	const name = req.body.nome;
	const surname = req.body.cognome;
	const email = req.body.email;

	const newStudent = new Student({_id: id, name: name, surname: surname, email: email});
	const savedStudent = await newStudent.save();
	res.status(201).json(savedStudent);
}
