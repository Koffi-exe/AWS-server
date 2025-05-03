import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/', (req, res) => {
    res.send("Server running, send data at /register")
})

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const User = mongoose.model('User', UserSchema)

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password })
        await newUser.save()
        res.status(201).send(`User registered successfully`)
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`)
    }
})

app.listen(port, async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Listening at port:${port}, MongoDB database successfully connected`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
})
