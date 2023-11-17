import mongoose from "mongoose";
import env  from "../config/config.js"
import dotenv from "dotenv";
dotenv.config();


const {
    passwordDb,
    userDb,
    hostDb,
    nameDb,
} = env


mongoose
    .connect(`mongodb+srv://${userDb}:${passwordDb}@${hostDb}/${nameDb}?retryWrites=true&w=majority`)
    .then(() => console.log("conect to db")).catch(e => console.log(e))