const { Router } = require('express');
const router = Router();
const { studentsControllers } = require('../controllers/students.controllers')


router.get('/students', studentsControllers.getStudents);
router.post('/students', studentsControllers.postStudents);
router.delete('/students/:id', studentsControllers.deleteStudents);
router.patch('/students/:id', studentsControllers.patchStudents);




module.exports = router;