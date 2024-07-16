const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

connectToMongo();
const app = express();
app.use(cors());
const port = 5000;

app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html")); // Corrected method here
});

app.get("/", (req, res) => {
  res.send("kaif.....");
});

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`);
});
