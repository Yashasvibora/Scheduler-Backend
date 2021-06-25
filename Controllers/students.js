const express= require('express');
const mongoose= require('mongoose');

const Student= require('../Model/studentdata.js');

const router= express.Router();

const getTeachers= async(req, res)=>{
    try{
        const teacher= await Teacher.find();

        res.status(200).json(teacher);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

const getspecTeacher= async(req, res)=> {
    const TeacherID= req.params.TeacherID;

    try{
        const stud= await Teacher.findOne({roll: roll});
        res.status(200).json(stud);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}
/*
//Type the following function in the mongoDB terminal
function getValueForNextSequence(sequenceOfName){
    var sequenceDoc= Student.sequence.findOneAndUpdate({
        query: {_id: sequenceOfName},
        update: {$inc: {sequence_value: 1}},
        new: true
    });
    return sequenceDoc.sequence_value;
}*/

const createteacher =  async (req, res) => {
    console.log(req.body);
    const newteacher = new Teacher({
        _id: getValueForNextSequence("item_id"), //auto generates an incrementing unique id everytime
        Teacher_Name:req.body.Teacher_Name,
        TeacherID:req.body.TeacherID,
        Event_Name:req.body.Event_Name,
        EventID:req.body.EventID,
        Event_Description:req.body.Event_Description,
        Starting_Date: req.body.Starting_Date,
        Starting_Time: req.body.Starting_Time,
        Ending_Time: req.body.Ending_Time
     })
    try {
        await newteacher.save();
        res.status(201).json(newteacher);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateteacher = async (req, res) => {
    const TeacherID= req.params.TeacherID;
    try{
        await Teacher.findOneAndUpdate({
            TeacherID: TeacherID,
        },
        {   
            Teacher_Name:req.body.Teacher_Name,
            TeacherID:req.body.TeacherID,
            Event_Name:req.body.Event_Name,
            EventID:req.body.EventID,
            Event_Description:req.body.Event_Description,
            Starting_Date: req.body.Starting_Date,
            Starting_Time: req.body.Starting_Time,
            Ending_Time: req.body.Ending_Time
            }
        )
        res.status(202).json({TeacherID: TeacherID});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteteacher = async (req, res) => {
    const TeacherID= req.params.TeacherID;

    try {
        await Teacher.findOneAndRemove({TeacherID: TeacherID});
        res.status(203).json({TeacherID:TeacherID});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getTeachers= getTeachers;
module.exports.createteacher= createteacher;
module.exports.getspecTeacher= getspecTeacher;
module.exports.updateteacher= updateteacher;
module.exports.deleteteacher= deleteteacher;
