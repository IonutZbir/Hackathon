"use strict";

import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
	_id: String,
	name: String,
	members: [{ type: String, ref: "Student" }],
	createdAt: { type: Date, default: Date.now },
});

const Team = mongoose.model("Team", TeamSchema);
export default Team;
