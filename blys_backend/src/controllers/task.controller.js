

const {getAllTask,addTask,delTask} = require('../models/task.model')

const getTask =async  (req,res)=>{
const user = req.user;

const tasks =await getAllTask(user.id);
if(!tasks)
{
    return res.status(404).json('Task  fetched failed');

}

 res.status(200).json({message:'Task Successfully fetched',tasks});;


 }

 const createTask = async (req,res)=>{
    const {title,description,status} =req.body;
    const userId = req.user.id;

    if (!title || !description || !status) {
        return res.status(400).json({ error: 'All fields are required' });
      }

    try{


const tasks = await addTask(userId,title,description,status);
if(!tasks)
{
    return res.status(500).json({success:false,message:'Error Creating Task'});
}

res.status(200).json({success:true,message:'Task Created Succesfully'});

    }
    catch(err){
throw new Error('Task Creation error',err);
    }
 }

const deleteTask = (req,res)=>{
    const userId = req.user.id;
    const {id} = req.params.id;




    try {
        
const task = delTask(userId,taskId)
if(!task){
   return res.status(403).json({ message: 'Unauthorized or task not found' });
}
res.status(200).json({ message: 'Task Deleted Successfully' });

    } catch (error) {
        throw new Error("Erro Deleting the task",err);
    }



}

module.exports = {getTask, createTask, deleteTask}