// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//  date is empty
app.get("/api/", (req, res) => {
  res.json({ unix: new Date().getTime(), utc: new Date().toUTCString() });
});

app.get("/api/:date?", function (req, res) {
  const paramsDate = req.params.date;
  const reqExpTimestamp = /^\d+$/;

  // date is timestamp
  if (reqExpTimestamp.test(paramsDate)) {
    res.json({
      unix: new Date(Number(paramsDate)).getTime(),
      utc: new Date(Number(paramsDate)).toUTCString(),
    });
  }
  // invalid date
  if (!new Date(paramsDate).getFullYear()) {
    res.json({ error: "Invalid Date" });
  }
  // valid regular date
  res.json({
    unix: new Date(paramsDate).getTime(),
    utc: new Date(paramsDate).toUTCString(),
  });
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
