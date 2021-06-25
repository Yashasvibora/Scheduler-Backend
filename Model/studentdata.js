const { Timestamp } = require('mongodb');
const mongoose= require('mongoose');

const teacherSchema= mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    Teacher_Name:{
        type: String,
        required: true,
    },
    TeacherID: {
        type: String,
        required: true,
        unique: true
    },
    Event_Name: {
        type: String,
        required: true,
    },
    EventID: {
        type: Number,
        required: true,
        unique: true,
    },
    Event_Description: {
        type: String,
        required: true,
    },
    
    Starting_Date: {
        type: Date,
        default: new Date("<YYYY-mm-dd>"),
    
    },
    Starting_Time:{
        type: String,
        required: true
    },
    Ending_Time:{
        type: String,
        required: true
    },
    
})
var teacherdata= mongoose.model('teacherdata', teacherSchema);
module.exports= teacherdata;
