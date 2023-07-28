const express = require("express");

const app = express();
const PORT = 8000;

// 엔진
app.set("view engine", "ejs");

app.set("views", "99");

//정적 경로 설정
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.send("Hello express");
  // res.send({
  //   result: true,
  //   code: 1000,
  //   message: "회원가입에 성공하였습니다.",
  //   data: { name: "minsang" },
  // });
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  res.render("99", { numbers });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
