import { createContext,useState } from "react";
import employeelist from "../models/employeelist";
export const EmployeeContext = createContext()
  

function AppContextProvider(props) {
   const [staff, setStaff] = useState(employeelist[0])
    
    return(<EmployeeContext.Provider value={{
        staff,
        setStaff
    }}>
        {props.children}

    </EmployeeContext.Provider>
)
}
export default AppContextProvider