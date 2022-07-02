const express = require("express");
const cors = require("cors");
const graphql = require("./graphql/checkin");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.Router());

app.get("/", (request, response) => {
  response.send("Hello, API!");
});

app.use("/graphql", graphql);

module.exports = app;
