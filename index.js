import express from 'express'
import dotenv from 'dotenv'
import PostRouter from './router/post.router.js'

dotenv.config()

const PORT = 5000

const app = express()
app.use(express.json())
app.use('/',PostRouter)
app.listen(PORT,()=>console.log('Server start Port: ' + process.env.PORT))