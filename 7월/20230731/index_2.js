const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  // res.send("hello123");
  res.render("index_2", { title: "폼 실습" });
});

app.get("/get_form", (req, res) => {
  console.log(req.query);
  res.render("result_2", {
    title: "GET요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/post_form", (req, res) => {
  console.log(req.body);
  res.render("result_2", {
    title: "POST요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
