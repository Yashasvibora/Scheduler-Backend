const express= require('express');
const mongoose= require('mongoose');

const app= express();
//for offline purposes
//const url= mongodb://localhost:27017/backend;
const url= "mongodb+srv://Yash:******@cluster0.dn9io.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

const studentrouter= require("./Routes/teachers");

app.use('/students', studentrouter);

const port= 5000;
app.listen(port, ()=>{
    console.log('Server started');
})
