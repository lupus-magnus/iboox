import mongoose from "mongoose";

const USER = process.env.ATLAS_USER;
const PWD = process.env.ATLAS_PWD;

mongoose.connect(
  `mongodb+srv://${USER}:${PWD}@ibooxcluster.7wo1y.mongodb.net/iboox`
);

let db = mongoose.connection;

export default db;
