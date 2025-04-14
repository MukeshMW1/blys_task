import React, { useState } from 'react'
import AddTask from '../components/AddTask';
import { FaPlus } from "react-icons/fa";

import { CiCircleMinus } from "react-icons/ci";
import TaskList from '../components/TaskList';
const Task = () => {
  const [render,setRender] =useState(false);
  const [addTask,setAddTask] =useState(false);
  return (
    <div className='flex justify-center items-center  relative w-full h-[100%] '>
      <div className="flex flex-col  items-center justify-center  mt-4 z-10 absolute top-0 ">
      {addTask &&
 <AddTask setRender={setRender}/>

}
     <button className=' text-white mt-2 p-4 border border-blue-500 rounded-[20px] hover:bg-black hover:text-white outline:none hover:border-none' onClick={()=>setAddTask(!addTask)} >{addTask ?<CiCircleMinus />:<FaPlus />}</button>
      </div>
      <div className="mt-20 w-[80vh]   ">
      <TaskList render={render}/>
      </div>
    </div>
  )
}

export default Task
