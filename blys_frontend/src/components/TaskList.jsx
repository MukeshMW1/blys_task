import React, { useState, useEffect } from 'react';

const TaskList = ({render}) => {
  const [tasks, setTasks] = useState([]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${process.env.RENDERURL}/task/get`                          , {
        method: 'GET',
        credentials: 'include',
      });
      

      if (!response.ok) {
        console.error('Error fetching tasks:', response.statusText);
        return;
      }

      const data = await response.json();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`${process.env.RENDERURL}/task/delete/${taskId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) {
        console.error('Error deleting task:', response.statusText);
        return;
      }

      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleExpand = (taskId) => {
    setExpandedTaskId(prevId => (prevId === taskId ? null : taskId));
  };

  useEffect(() => {
    fetchTasks();
  }, [render]);

  return (
    <div className=''>
      <div className="flex flex-col gap-4 mt-10 z-10">
        <div className="bg-black/40 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-xl 
                        relative group transition-all duration-500 
                        hover:border-blue-500 hover:shadow-blue-500/40 w-full ">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Task List</h1>
          
          {/* Scrollable Task List Container */}
          <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col p-3 rounded bg-white/20 backdrop-blur text-white outline-none"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleExpand(task.id)}
                  >
                    <span className="font-semibold">{task.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(task.id);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </div>

                  {expandedTaskId === task.id && (
                    <div className="mt-2 text-sm text-gray-300">
                      {task.description}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-white text-center">No tasks available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
