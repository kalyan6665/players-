const express = require("express");
const playerRoutes = require("./routes/players");
const mongoose = require('mongoose')

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/player")
  .then(() => {
    console.log("MongoDB connected ");
    app.listen(port, () => {
      console.log("server listening on " + port);
    });
  })
  .catch((err) => console.error("Connection failed ", err));



app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/players", playerRoutes);
