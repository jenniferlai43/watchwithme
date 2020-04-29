'use strict';

const express = require('express'),
	bodyParser = require("body-parser"),
	path = require("path");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static"), { maxAge: 60 * 60 * 1000 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Import main route controller
require("./routes/index")(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);