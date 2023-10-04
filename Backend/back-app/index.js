import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './Routes/User.js'
import postRoute from './Routes/Post.js'
dotenv.config();

const app = express();
const PORT = 3005;

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected!"))

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(PORT, () => console.log(`Server running on ${PORT}`))