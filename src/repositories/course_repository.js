const pool = require('./dbconnection')
const course_repository ={}

course_repository.getAll = async ()=>{
    try {
        const context = await pool();
        const result = await context.query('select * from course');
        return result.recordset;
      } catch (error) {
        console.log(error)
      }
}


module.exports = course_repository;