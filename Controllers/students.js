const express= require('express');
const mongoose= require('mongoose');

const Student= require('../Model/studentdata.js');

const router= express.Router();

const getStudents= async(req, res)=>{
    try{
        const student= await Student.find();

        res.status(200).json(student);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

const getspecStudent= async(req, res)=> {
    const roll= req.params.roll;

    try{
        const stud= await Student.findOne({roll: roll});
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

const createstudent =  async (req, res) => {
    console.log(req.body);
    const newstudent = new Student({
        _id: getValueForNextSequence("sch_id"), //auto generates an incrementing unique id everytime
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
        await newstudent.save();
        res.status(201).json(newstudent);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updatestudent = async (req, res) => {
    const roll= req.params.roll;
    try{
        await Student.findOneAndUpdate({
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
        res.status(202).json({roll: roll});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deletestudent = async (req, res) => {
    const TeacherID= req.params.TeacherID;

    try {
        await Student.findOneAndRemove({TeacherID: TeacherID});
        res.status(203).json({TeacherID:TeacherID});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudents= getStudents;
module.exports.createstudent= createstudent;
module.exports.getspecStudent= getspecStudent;
module.exports.updatestudent= updatestudent;
module.exports.deletestudent= deletestudent;
