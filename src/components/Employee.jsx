import { useContext } from "react" 
import { EmployeeContext } from "../contexts/App_context"
import employeelist from "../models/employeelist"

function Employee(props) {
  
    let {staff} = useContext(EmployeeContext)
  return (
    <div>
        <img className='img1' src={staff.profile.image}/>
        <h1>{staff.profile.name}</h1>
        <hr/>
        <h1>{staff.profile.title}</h1>
        <hr/>
        <h1>Call Office:{staff.callOffice}</h1>
        <hr/>
        <h1>Call Mobile:{staff.callMobile}</h1>
        <hr/>
        <h1>SMS:{staff.sms}</h1>
        <hr/>
        <h1>Email:{staff.email}</h1>
        <hr/>
        
    </div>
  )
}

export default Employee
