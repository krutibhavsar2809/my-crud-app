import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Students from './Students/Students';
import CreateStudents from './Students/CreateStudents';
import UpdateStudents from './Students/UpdateStudents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students />}></Route>
          <Route path='/create' element={<CreateStudents />}></Route>
          <Route path='/update/:id' element={<UpdateStudents />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
