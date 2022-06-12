const courseController = {};
const courses = require('../courses.json')

courseController.getAll = (req,res)=>{
    //logica para listar todos los cursos
    res.json(courses);
}
courseController.create = (req,res)=>{
    //logica para crear un nuevo objeto
    const id= courses.length+1;
    const newCourse = req.body;
    newCourse["id"]= id; 
    courses.push(newCourse);
    res.json(newCourse);
}
courseController.update = (req,res)=>{
    //logica para actualizar un curso
    res.json({"mensaje":"objeto actualizado"});
}
courseController.delete = (req,res)=>{
    //logica para eliminar
    res.json({"mensaje":"objeto eliminado"});
}


module.exports = courseController
