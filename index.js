// Import Libraries
let express = require("express")
let path = require('path')
let bodyParser = require('body-parser')
let ejs = require('ejs');

// Express.js App
let app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }));

// Listen Home
app.get("/", (req, res) => {
  res.render("index")
})

// Start the App
app.listen(port, () => {
  console.log("App is running on localhost:"+port)
})
