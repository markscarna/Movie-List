import express from "express";
import cors from "cors";
import knex from "knex";
import knexfile from "./knexfile.js";

const app = express();
const port = 8080;
const myknex = knex(knexfile.development);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Movies!");
});

app.get("/movies", function (req, res) {
  myknex
    .select("*")
    .from("movies")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be retrieved. Please try again",
      })
    );
});

app.post("/movies", (req, res) => {
  myknex
    .insert({
      title: req.body.title,
      genre: req.body.genre,
      release_date: req.body.release_date,
      image_path: req.body.image_path,
    })
    .into("movies")
    .then(res.status(201).send("Successfully Created"));
});

app.listen(port, console.log(`express server running at port: ${port}`));
