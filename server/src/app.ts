import express from "express"
import cors from "cors"
// import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  //for json data
app.use(express.urlencoded({extended: true, limit:"16kb"}))  //for data taken from urls
app.use(express.static("public")) // for storing files or folders(like a pdf)

// app.use(cookieParser())

export {app}