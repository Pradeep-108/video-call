import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./config/db.js"
import { createServer } from "node:http"
import { Server } from "socket.io"
import cors from "cors"
import { connectToSocket } from "./controllers/socketManager.js"
import userRoutes from "./routes/users.routes.js"

const app = express()
const server = createServer(app)
const io = connectToSocket(server)

app.use(cors())
app.use(express.json({limit: "40kb"}))
app.use(express.urlencoded({limit:"40kb", extended:true}))

connectDB()

app.get("/", (req, res)=> {
    return res.json({"msg":"hello from Success"})
})

app.use("/api/v1/users", userRoutes)


const PORT = process.env.PORT
server.listen(PORT, ()=> {
    console.log(`server listen at port ${PORT}`)
})