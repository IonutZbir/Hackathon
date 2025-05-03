"use strict"

import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    _id: String,
    name: String,
    surname: String,
    email: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;