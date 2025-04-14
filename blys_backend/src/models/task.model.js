

const db = require('../config/db.config');



const getAllTask =async (id) =>{


    const result  = await db.query('SELECT * FROM tasks WHERE user_id=$1',[id]);
    console.log('result',result.rows);
    return result.rows;
}


const addTask = async (id,title,description,status) =>{
    const result = await db.query(
        'INSERT INTO tasks(title, description, status, user_id) VALUES($1, $2, $3, $4) RETURNING *',
        [title, description, status, id]
      );
    return result.rows[0];
 }


const delTask = async (userId,taskId) =>{
    const check = await db.query('SELECT * FROM tasks WHERE id = $1 AND user_id = $2', [taskId, userId]);

    if (check.rows.length === 0) {
      return null
    }

 const task =  await db.query('DELETE FROM tasks WHERE id = $1', [taskId]);
return task;
}



module.exports = {getAllTask,addTask,delTask}