const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://mohdkaif796hb:cCBxnKGyfIGTeH86@cluster0.76529wv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

mongoose.connection.on("connected", () => console.log("database connected"));

module.exports = connectToMongo;
