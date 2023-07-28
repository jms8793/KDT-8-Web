const express = require("express");

const app = express();
const PORT = 8000;

// 엔진
app.set("view engine", "ejs");
// app.set("views", "./views");

// 정적인 파일 불러오기
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  // res.send("Hello express");
  // res.send({
  //   result: true,
  //   code: 1000,
  //   message: "회원가입에 성공하였습니다.",
  //   data: { name: "minsang" },
  // });
  res.render("test", { data: "minsang" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
