import React, { useState } from 'react';

const AddTask = ({setRender}) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: 'pending' 
  });

  const handleClick = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch(`${import.meta.env.VITE_RENDERURL}/task/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(taskData)
      });

      if (!response.ok) {
        console.log('Error:', response.statusText);
        throw new Error('Failed to create task');
      }

      const result = await response.json();
      setRender(prev=> !prev)
      console.log('Task added:', result);

      
      setTaskData({
        title: '',
        description: '',
        status: 'pending'
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full mt-10 z-10 realtive">
      <div className="bg-black/40 backdrop-blur-lg p-10 rounded-2xl border border-white/20 shadow-xl 
                      hover:animate-none animate-pulse  relative group transition-all duration-500 
                      hover:border-blue-500 hover:shadow-blue-500/40 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Task Management</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Task Title"
            value={taskData.title}
            onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
            className="p-3 rounded bg-white/20 backdrop-blur text-white placeholder:text-gray-300 outline-none"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={taskData.description}
            onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
            className="p-3 rounded bg-white/20 backdrop-blur text-white placeholder:text-gray-300 outline-none"
          />
          <select
            value={taskData.status}
            onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
            className="p-3 rounded bg-white/20 backdrop-blur text-white outline-none"
          >
            <option value="pending" className="text-black">Pending</option>
            <option value="in progress" className="text-black">In Progress</option>
            <option value="completed" className="text-black">Completed</option>
          </select>
        </div>
        <button
          className="mt-8 w-full p-3 text-white font-semibold rounded-xl border border-blue-500
                     hover:bg-blue-500 hover:text-white transition duration-300"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
