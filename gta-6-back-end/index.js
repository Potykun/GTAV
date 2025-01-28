import express from "express"
const app = express()
const PORT = 5000

app.get("/api", (req, res) => {
	res.send("hello world")
})

app.listen(PORT, () => {
	console.log(`example port ${PORT}`)
})
