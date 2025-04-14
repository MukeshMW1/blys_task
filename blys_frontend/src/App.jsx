import React from 'react';
import Login from './pages/Login';
import { Routes,Route } from 'react-router-dom';
import Task from './pages/Task';
import ProtectedRoutes from './components/ProtectedRoutes';
const App = () => {
  return (
    <div className="">
      <Routes>
        
      <Route path='/' element={<Login/>} />

      <Route path='/tasks' element={
        <ProtectedRoutes>

        <Task/>
        </ProtectedRoutes>
        }
         />
      
      </Routes>
    </div>
  );
};

export default App;
