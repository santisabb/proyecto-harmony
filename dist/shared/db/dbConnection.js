import { MongoClient } from "mongodb";
const connection = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const cli = new MongoClient(connection);
await cli.connect();
export let db = cli.db('harmony');
//# sourceMappingURL=dbConnection.js.map