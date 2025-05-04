//Usato per caricare mongo con i dati corretti
import {
	addStudentsFromFile,
} from "../../controllers/studentController.js";


db = db.getSiblingDB('hackathon');
db.createCollection('teams');
db.createCollection('students');
//Fatto automaticamente?
addStudentsFromFile();
