const express = require("express");

const app = express();
const PORT = 8000;

// 엔진
app.set("view engine", "ejs");
app.set("views", "./webpages");

//정적 경로 설정
app.use(express.static("./public"));

app.get("/main.ejs", (req, res) => {
  res.render("main");
});
app.get("/login.ejs", (req, res) => {
  res.render("login");
});
app.get("/question.ejs", (req, res) => {
  res.render("question");
});
app.get("/shop.ejs", (req, res) => {
  res.render("shop");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
