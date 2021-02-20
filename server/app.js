const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const auth = require("./routes/auth.js");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
    app.use("/", auth);
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log("Server running successfully on localhost:" + PORT);
});

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/client/build")));
// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });
mongoose.set("useFindAndModify", false);
