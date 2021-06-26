const express= require("express");
const teacher_Act= require("../Controllers/teachers");

const router= express.Router();

router.get('/', teacher_Act.getTeachers);
router.get('/:TeacherID',teacher_Act.getspecTeacher);
router.post('/', teacher_Act.createteacher);
router.patch('/:TeacherID', teacher_Act.updateteacher);
router.delete('/:TeacherID', teacher_Act.deleteteacher);

module.exports= router;
