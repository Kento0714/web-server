const express = require('express');
const path = require("path");
const app = express();
 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")));

// app.get('/', function (req, res) {
//   res.send('トップページ')
// })

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if(answer === "2") {
        res.send("正解");
    } else {
        res.send("不正解");
    }
  });

app.get('/api/v1/users', function (req, res) {
    res.send({
        name: "Mike",
        age: 30
    })
  })
  
 const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("サーバー起動!")
})