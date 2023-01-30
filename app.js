const express = require("express")
const morgan = require("morgan")
const app = express()

const PORT = 3000

app.use(morgan('combined'))

app.listen(PORT, () => {
    console.log("server's running on port", PORT)
})

app.get("/api", (req, res) => {
    res.send("hello world")
})