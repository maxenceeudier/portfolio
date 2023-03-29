require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");


require("./mongo");

const { PORT, APP_URL } = require("./config.js");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + "/../public"));

//app.use("/project", require("./controllers/project"));


const d = new Date();

app.get("/", async (req, res) => {
  res.status(200).send("API LOCAL TIME :  " + d.toLocaleString());
});


app.listen(PORT, () => console.log("Listening on port " + PORT));