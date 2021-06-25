const express= require('express');
const mongoose= require('mongoose');

const app= express();

const url= "mongodb+srv://Yash:mait123@cluster0.dn9io.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true});
const con= mongoose.connection;

app.use(express.json());
try{
    con.on('open', ()=>{
        console.log('connected');
    })
} catch(error)
{
    console.log("Error: " + error);
}

const studentrouter= require("./Routes/students");

app.use('/students', studentrouter);

const port= 5000;
app.listen(port, ()=>{
    console.log('Server started');
})