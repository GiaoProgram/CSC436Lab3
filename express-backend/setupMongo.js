var express = require("express");

var app = express();

var express = require("express");
var app = express();

app.use(express.json());
app.use("/auth", require("./routes/auth"));
app.use("/todo", require("./routes/todo"));

module.exports = connect;