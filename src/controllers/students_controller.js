const studentsController = {};

studentsController.getAll = (req,res) =>{
    //logica
    res.json({"nombre":"juan","apellido":"perano","edad":"12"});
}

module.exports = studentsController