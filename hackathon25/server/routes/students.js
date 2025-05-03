"use strict";

import express from "express";
import {
	addStudentsFromFile,
	getStudents,
	getStudentById,
	createStudent,
    countStudents,
} from "../controllers/studentController.js";

const router = express.Router();

// La route di partenza è: /students/...

router.get("/add-from-file", addStudentsFromFile); // usata solo per creare la tabella su MongoDB
router.get("/", getStudents);
router.get("/count", countStudents);
router.get("/:id", getStudentById);

router.post("/", createStudent);

export default router;
