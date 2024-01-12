const express = require("express");
const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.json());

// The following line is configuring the middleware to parse incoming URL-encoded data.
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "register.html"));
});
app.get("/error", (req, res) => {
  res.sendFile(__dirname+ "/pages/errorPage.html");
});


app.use(express.static("pages"));

connectDB();

app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
