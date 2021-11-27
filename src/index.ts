import bmiCalculator from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hello", async function (req, res) {
  res = "<h1>Hello Full Stack!</h1>";
});

app.post("/bmi", (req, res) => {
  try {
    var height: number = Number(req.query.height);
    var weight: number = Number(req.query.weight);
    const bmiRes = bmiCalculator(height, weight);
    return res.json(bmiRes);
  } catch {
    return res.status(400).json({ error: "malformatted missing" });
  }
});

app.post("/exercises", (req, res) => {
  try {
    var height: number = Number(req.query.height);
    var weight: number = Number(req.query.weight);
    const bmiRes = bmiCalculator(height, weight);
    return res.json(bmiRes);
  } catch {
    return res.status(400).json({ error: "malformatted missing" });
  }
});

const server = http.createServer(app);

server.listen(3002, () => {
  console.log(`Server running on port 3002}`);
});
