const mongoose=require("mongoose");
const dotenv=require("dotenv")

dotenv.config();

const username = process.env.Db_name;
const password = process.env.Db_password;

const Connection = () => {
  // const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0.pvgxw4g.mongodb.net/callrecords?retryWrites=true&w=majority`;
  const MONGO_URI = `mongodb+srv://${username}:${password}@db-mongodb-nyc3-75708-9e7d3949.mongo.ondigitalocean.com/`;

  mongoose.connect(MONGO_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully");
  });
  mongoose.connection.on("Disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting database");
  });
};


module.exports = Connection;
