var express = require("express")
var app = express()


app.use("view engine", "ejs")
app.use("views", "./views")


app.set(express.static("./public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log("Server Started")
})