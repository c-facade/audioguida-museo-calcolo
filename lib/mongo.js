// lib/mongo.ts

import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;
var mongo_valid = true;

if (!MONGODB_URI || !MONGODB_DB) {
	console.log(
		'Please define the MONGODB_URI and MONGODB_DB environment variable'
	);
	mongo_valid = false;
}

let cached = global.mongo;
if (!cached) cached = global.mongo = {}

export async function connectToDatabase() {
	if (cached.conn) return cached.conn;
	if (mongo_valid == false) return null;
	if (!cached.promise) {
		const conn = {}
    cached.promise = MongoClient.connect(MONGODB_URI)
      .then((client) => {
        conn.client = client
        return client.db(MONGODB_DB)
      })
      .then((db) => {
        conn.db = db
        cached.conn = conn
      })
	}

	await cached.promise
	return cached.conn
}


