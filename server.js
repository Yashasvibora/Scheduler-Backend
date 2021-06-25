const express= require('express');
const mongoose= require('mongoose');

const app= express();

const url= "mongodb://localhost:27017/scheduler";

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