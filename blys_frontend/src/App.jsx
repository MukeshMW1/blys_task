import React from 'react';
import Login from './pages/Login';
import { Routes,Route } from 'react-router-dom';
import Task from './pages/Task';
const App = () => {
  return (
    <div className="">
      <Routes>
        
      <Route path='/' element={<Login/>} />

      <Route path='/tasks' element={
       

        <Task/>
     
        }
         />
      
      </Routes>
    </div>
  );
};

export default App;
