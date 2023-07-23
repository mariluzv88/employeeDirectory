
import './App.css';
import EmployeeList from './components/EmployeeList';
import employeelist from './models/employeelist';
import Employee from './components/Employee';
import { useState } from 'react';

// const state = {
//   employeelist
//  }

function App() {
 const [model,setModel]=useState(employeelist)
  return (
    <div className="App">
      <div className='container'>
          <div className='empList'>
            <div className='title' >Employee Directory </div>
            <input type="text" placeholder=" Search...." name="search"/>   
            <div>
          <EmployeeList model={model[0]} />
          <EmployeeList model={model[1]} />
          <EmployeeList model={model[2]} />
          <EmployeeList model={model[3]} />
          <EmployeeList model={model[4]} />
          <EmployeeList model={model[5]} />
          </div>
          
          </div>
          
          <div className='empProfile'>
            <div>Employee</div>
            <Employee/>
          </div>
      </div>
      
    </div>
  );
}

export default App;
