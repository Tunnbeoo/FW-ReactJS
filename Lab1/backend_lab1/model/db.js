const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "db";

async function connectDb() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Kết nối thành công đến server MongoDB");

    return client.db(dbName);
  } catch (error) {
    console.error("Không thể kết nối đến server MongoDB:", error);
    throw error; // rethrow the error to handle it upstream
  }
}

module.exports = connectDb;
