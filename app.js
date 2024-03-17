if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const AppErr = require("./utils");
const popsongRouter = require("./routes/popsongs");

const cors = require("cors");
const connectServer = require("./server");
connectServer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/build"));

app.use("/api/popsongs", popsongRouter);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

// app.use("*", (req, res, next) => {
//   new AppErr(400, "Page Not Found");
// });

app.use((err, req, res, next) => {
  console.log(err);
  res.json(err);
});

app.listen("8080", () => {
  console.log("listening on port 8080!");
});
