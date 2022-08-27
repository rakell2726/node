const pool = require('./dbconnection')
const course_repository ={}
const context = await pool();

course_repository.getAll = async ()=>{
    try {        
        const result = await context.query('select * from course');
        return result.recordset;
      } catch (error) {
        console.log(error)
      }
}

course_repository.create = async ()=>{
  const result = await context
  .input ('description',sql.Varchar,model.description)
  .input ('teacher',sql.Varchar,model.teacher)
  query('insert into course (description,teacher) values (@descriotion, @teacher)');
  return result.recordset
}


module.exports = course_repository;