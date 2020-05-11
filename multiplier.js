const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let multiple = n1 * n2
    console.log(req.body);
    res.sendFile();
})

app.listen(2000, function () {
    console.log("i am running");
});