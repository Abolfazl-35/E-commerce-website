import React, { useCallback } from 'react'
import { createContext,useState } from 'react'
import AllShoesData from '../AllShoesData'




export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
const [user,setUser] = useState(null)
const [registerInfo,setRegisterinfo] = useState({
    FirstName: "",
    LastName: "",
    Password: "",
    DateOfBirth: "",
    Select: "",
    UpdateCheck: false,
    PrivecyPolicyCheck: false,
    visibility: false,
})

const updateRegisterInfo=useCallback((info)=>{
setRegisterinfo(info)


},[])

    console.log(registerInfo)
    return (
<AuthContext.Provider value={{user,registerInfo,updateRegisterInfo}}>
{children}
</AuthContext.Provider>
)
};