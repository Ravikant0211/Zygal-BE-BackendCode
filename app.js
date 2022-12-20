const fs = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const data = req.body;
  console.log(data);
  fs.readFile(`${__dirname}/data/sample.json`, "utf-8", (err, data) => {
    const sampleData = JSON.parse(data);
    // match the credentials coming from request and from the sample.json file
    // if they match allow user to login
  });
});

//a get route for adding a cookie
app.get("/setcookie", (req, res) => {
  res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
    expires: new Date(2147483647 * 1000).toUTCString(),
    secure: true,
    httpOnly: true,
    sameSite: "lax",
  });
  res.send("Cookie have been saved successfully");
});

// get the cookie incoming request
app.get("/getcookie", (req, res) => {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
});

// delete the saved cookie
app.get("/deletecookie", (req, res) => {
  //show the saved cookies
  res.clearCookie();
  res.send("Cookie has been deleted successfully");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
