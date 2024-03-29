const express = require("express");
const app = express();
const port = 8000;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));

//use express router
app.use("/", require("./routes"));
app.use(express.static("assets"));

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
