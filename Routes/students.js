const express= require("express");
const teacher_Act= require("../Controllers/students");

const router= express.Router();

router.get('/', teacher_Act.getTeachers);
router.get('/:roll',teacher_Act.getspecTeacher);
router.post('/', teacher_Act.createteacher);
router.patch('/:roll', teacher_Act.updateteacher);
router.delete('/:roll', teacher_Act.deleteteacher);

module.exports= router;