import express from "express"

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8000;

app.use("/", (req, res)=>{
    res.json({
        message: "Server is running"
    })
})

app.listen(PORT, (res)=>{
    console.log("server is running on PORT: ",PORT)
})