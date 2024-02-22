// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();
const PORT = 3000;

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

//  route for empty date
app.get("/api/", (req, res) => {
  const currentDate = new Date();
  res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
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
  // if a date is invalid
  if (!new Date(paramsDate).getFullYear()) {
    res.json({ error: "Invalid Date" });
  }
  // valid regular date like --> "2024-03-03"
  res.json({
    unix: new Date(paramsDate).getTime(),
    utc: new Date(paramsDate).toUTCString(),
  });
});

// listen for requests :)
app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
