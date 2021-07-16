const express = require("express");
const axios = require("axios");
const routes = express.Router();

let result;

routes.get("/:code", function (req, res) {
  axios
    .get(`http://httpstat.us/${req.params.code}`)
    .then((response) => res.json(response.data))
    .catch((error) => {
      if (error.response.data.code == 502 && req.params.code != 502) {
        result = { code: 404, message: "Esse valor não é um status válido." };
      } else {
        result = error.response.data;
      }
      res.end(JSON.stringify(result));
    });
});

routes.get("/sleep/:code", function (req, res) {
  axios
    .get(`http://httpstat.us/${req.params.code}?sleep=${req.query.sleep}`)
    .then((response) => res.json(response.data))
    .catch((error) => {
      if (error.response.data.code == 502 && req.params.code != 502) {
        result = { code: 404, message: "Esse valor não é um status válido." };
      } else {
        result = error.response.data;
      }
      res.end(JSON.stringify(result));
    });
});

module.exports = routes;
