import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import classNames from 'classnames'
import { Opacity } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person';
import { PerformanceContex } from "../context/PerformanceContex"


function UserDashBoard() {
  

    const {user,openDashboard}=useContext(AuthContext)
    
  return (
  

   
    <div
    style={{transition:"all 1000ms ease-in-out"}}
    className={classNames( 'flex flex-col justify-start p-5 space-y-5 items-center z-[1000] bg-slate-600 min-h-[50vh] w-[300px] sm:w-[400px]   border rounded font-Roboto text-lg',
    {"absolute top-[100%] left-0 opacity-100 ":openDashboard},
    {"absolute top-[100%] pointer-events-auto left-[-100%]":!openDashboard})}>
      <div className='flex p-4 rounded justify-center flex-col space-y-3 items-center h-1/2 bg-slate-200 w-full '>
        
        {user?(<img
className=' border-2 object-cover   border-gray-500 rounded-full w-[75px] h-[75px]'
src={user.image}
alt=""
/>    ):(<div>{PersonIcon}</div>)}
        

<h1>
   {user.Firstname}
</h1>
      </div>

     
       
    
    </div>

   
  )
}

export default UserDashBoard