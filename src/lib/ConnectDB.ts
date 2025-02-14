import { MongoClient, ServerApiVersion } from "mongodb";

let db:any;
export const ConnectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    const client = new MongoClient(uri as string, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("Portfolio-Website");
    return db;
  } catch (error:any) {
    console.log(error.message);
  }
};