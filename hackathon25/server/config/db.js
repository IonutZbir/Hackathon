"use strict";
import mongoose from 'mongoose';

export default async function connectDB() {
	const uri = process.env.MONGO_URI;
	console.log(`[INFO]: Mongo URI: ${uri}`)
	try {
		await mongoose.connect(uri);
		console.log("[INFO]: MongoDB connected");
	} catch (err) {
		console.error("[ERROR]: MongoDB connection error:", err);
		process.exit(1);
	}
};

