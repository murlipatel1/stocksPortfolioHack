const connectToMongo = require("./db")
const express = require("express")
var cors = require("cors")
const app = express()
const port = 5000

connectToMongo();

app.use(express.json())
app.use(cors())
app.use("/api/auth",require("./routes/auth"))
app.use("/api/stocks",require("./routes/stockOps"))

app.get("/", (req, res) => {
    res.send("Testing!")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
//To implement more