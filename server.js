const express = require("express")
const fs = require("fs")
const app = express()

app.set("port", 5000)

app.use(express.static("./"))

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})