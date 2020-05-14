const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.json({
    msg: "GET",
  });
});

app.post("/", (req, res) => {
  res.json({
    msg: "Post",
  });
});

app.put("/", (req, res) => {
  res.json({
    msg: "PUT",
  });
});

app.delete("/", (req, res) => {
  res.json({
    msg: "Delete",
  });
});

app.post("/user", (req, res) => {
  const username = req.body.username;
  res.json({
    username: username,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`);
});
