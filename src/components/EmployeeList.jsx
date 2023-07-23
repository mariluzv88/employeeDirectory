import { useContext } from 'react'
import { EmployeeContext } from '../contexts/App_context'
import employeelist from '../models/employeelist'
import React from 'react'


function EmployeeList(props) {
  let {setStaff} = useContext(EmployeeContext)
 
  return (
    <div className='employee'
     onClick={()=>{
      setStaff(props.model)
     }}
     >
      
        <h1><img className='img'src={props.model.profile.image}/>{props.model.profile.name}
        <div>{props.model.profile.title}</div>
        </h1>
        <div></div>
        
      
       
    </div>
  )
}

export default EmployeeList