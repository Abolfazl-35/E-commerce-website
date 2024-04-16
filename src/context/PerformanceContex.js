import React, { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";
import UserDashBoard from "../Dashboards/UserDashBoard";

export const PerformanceContex = createContext();

const PerformanceContexProvider = ({children}) => {
 
  
  


  const [test,setOpenDashboard]=useState(false);



  return (
    <PerformanceContex.Provider
      value={ {test}}
    >
    {children}
    </PerformanceContex.Provider>
  );
};
export default PerformanceContexProvider;
