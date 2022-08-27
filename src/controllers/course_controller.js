const courseController = {};
const courses = require('../courses.json')
const course_repository = require('../repositories/course_repository')


courseController.getAll = async (req,res)=>{
    //logica para listar todos los cursos
    let resp = await course_repository.getAll();
    res.json(resp);
}
courseController.create = (req,res)=>{
    //logica para crear un nuevo objeto
    
    //const id= courses.length+1;
    const newCourse = req.body;
    //newCourse["id"]= id; 

    //convertir a modelo

    let modelo= new Course(newCourse.description,newCourse.teacher) ;
    //courses.push(newCourse);
  //  res.json(newCourse);
}
courseController.update = (req,res)=>{
    //logica para actualizar un curso
    res.json({"mensaje":"objeto actualizado"});
}
courseController.delete = (req,res)=>{
    //logica para eliminar
    res.json({"mensaje":"objeto eliminado"});
}


let sum = (x,y)=>{
    return x+y;
}


module.exports = courseController
