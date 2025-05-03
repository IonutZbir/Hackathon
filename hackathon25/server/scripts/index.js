"use strict"

const matricole = JSON.parse(fs.readFileSync("matricole.json", "utf-8"));
const headers = {
    matricola: "Matricola",
    nome: "Nome",
    cognome: "Cognome",
    email: "Email",
    team: "Team",
    entrata: "Data & Ora Entrata",
    uscita: "Data & Ora Uscita",
    firma: "Firma",
}


table_div = document.getElementById("table");

