const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const studentsController= require('../controllers/students_controller')
const courseController = require('../controllers/course_controller')

//course
router.get(apiRoute+'/course',courseController.getAll)
router.post(apiRoute+'/course',courseController.create)
router.put(apiRoute+'/course',courseController.update)
router.delete(apiRoute+'/course',courseController.delete)

//students
router.get(apiRoute+'/students',studentsController.getAll)

module.exports = router;