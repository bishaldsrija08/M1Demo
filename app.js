const { envConfig } = require("./config/envConfig")
const app = require("express")()
envConfig()
const port = process.env.PORT

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome!"
    })
})


app.get("/home", (req, res) => {
    res.status(200).json({
        message: "I am Home Page!"
    })
})







app.listen(port, () => {
    console.log(`Server is running  on port ${port}.`)
})