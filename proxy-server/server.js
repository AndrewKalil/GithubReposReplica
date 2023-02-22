var express = require("express");
var cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
var bodyParser = require("body-parser");

const CLIENT_ID = "bf13b7f7d4e1ceec5e19";
const CLIENT_SECRET = "746ce0cb4294964a153dc68f78b68ac88c31d21e";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/getAccessToken", async (req, res) => {
  req.query.code;

  const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`;

  await fetch(`https://github.com/login/oauth/access_token${params}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => console.log(e));
});

app.get("/getUserData", async (req, res) => {
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((e) => console.log(e));
});

app.listen(4000, () => {
  console.log("CORS server server running on localhost:4000");
});
