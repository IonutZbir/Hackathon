"use strict";

import express from "express";
import { getTeams, createTeam, getTeamById, joinTeam } from "../controllers/teamController.js";

const router = express.Router();

// La route di partenza è: /teams/...

router.get("/", getTeams);
router.get("/:code", getTeamById);

router.post("/join", joinTeam)
router.post("/create", createTeam);

export default router;