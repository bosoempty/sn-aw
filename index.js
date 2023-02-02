const express = require("express");
const cors = require('cors');

const GNAW = require("./model/getN");

const port = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {

  //  sets the header of the response to the user and the type of response that you would be sending back
  res.setHeader('Content-Type', 'text/html');
  res.write("<html>");
  res.write("<head>");
  res.write(`<title>N A : S</title>`);
  res.write("</head>");
  res.write("<body>");
  res.write(`<h1>N A : S</h1>`);
  res.write("</body>");
  res.write("<html>");
  res.end();
});
app.post("/min", GNAW, (req, res) => {
  res.status(200).send(req.nonce);
});
// server listening
app.listen(port, () => {
  console.log(`running on port ${port}`);
});

