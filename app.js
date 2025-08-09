const { envConfig } = require("./config/envConfig")
const app = require("express")()
envConfig()
const port = process.env.PORT

app.get("/", (req,res)=>{
res.send("Welcome!")
})


app.listen(port, ()=>{
    console.log(`Server is running  on port ${port}.`)
})