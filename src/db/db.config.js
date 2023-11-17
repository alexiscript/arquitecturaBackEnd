import mongoose from "mongoose";
import env  from "../config/config.js"

const {
    passwordDb ='XHzxaGgsH9DmOh7N',
    userDb='Desafio',
    hostDb ='desafio.tsokbhn.mongodb.net',
    nameDb ='EcomerceApi',
} = env

mongoose
    .connect(`mongodb+srv://${userDb}:${passwordDb}@${hostDb}/${nameDb}?retryWrites=true&w=majority`)
    .then(() => console.log("conect to db")).catch(e => console.log(e))