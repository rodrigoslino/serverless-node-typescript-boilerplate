import { URL } from 'url';
import { Db, MongoClient } from 'mongodb';

let cachedDb: Db = null;

const mongoUri = process.env.ENV_MONGO_URI;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = new URL(mongoUri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}
