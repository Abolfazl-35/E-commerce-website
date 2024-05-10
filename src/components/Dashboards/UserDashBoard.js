import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import classNames from 'classnames'
import TooltipClose from '../Tooltips/TooltipClose';
import TooltipLogOut from '../Tooltips/TooltipLogOut';
import TooltipInbox from "../Tooltips/TooltipInbox"
import TooltipFavorite from "../Tooltips/TooltipFavorite";
import ManageAccountsIcon from "../Tooltips/TooltipManageAccounts"
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
function UserDashBoard() {
  

    const {user,openDashboard}=useContext(AuthContext)
    
  return (
  

   
    <div
    style={{transition:"all 1000ms ease-in-out"}}
    className={classNames( 'flex flex-col justify-start p-5 space-y-5 items-center z-[1000] bg-main-0 min-h-[50vh] w-[300px] sm:w-[400px]   border rounded font-Roboto text-lg',
    {"absolute top-[100%] left-0 opacity-100 ":openDashboard},
    {"absolute top-[100%] pointer-events-auto left-[-100%]":!openDashboard})}>
      
      <div className='flex  w- w-full justify-end'>
        <TooltipClose/>
      </div>
      <div className='flex flex-col p-4 rounded space-y-3  space-x-5 items-start h-1/2 bg-slate-200 w-full '>
        <div className='flex items-center space-x-4'>
<Avatar
src={user?.profileimage?user.profileimage:null}
sx={{width:56,height:56}}
>

</Avatar>
        
<div>
<h1 className=' font-Roboto text-sm font-semibold '>
   {user.Firstname}
  
</h1>
</div>

</div>
{!user.isVerified &&(
  <Link to="/send-verify">
<p className=' font-Roboto text-sm'>Click for Verifying your Email</p>
</Link>
)}

      </div>


<div className='flex font-Oswald w-full  justify-between items-center p-1 border-t '>
  <p>Inbox</p><span><TooltipInbox/></span>
</div>
<div className='flex font-Oswald w-full  justify-between items-center p-1 border-t '>
  <p>Profile</p><span><ManageAccountsIcon/></span>
</div>
<div className='flex w-full font-Oswald justify-between items-center p-1 border-t'>
  <p>
    Favorite
  </p>
  <span>
    <TooltipFavorite/>
  </span>
</div>
<div className='flex w-full font-Oswald justify-between items-center p-1 border-t  '>
  <p>LogOut</p><span><TooltipLogOut/></span>
</div>

    </div>

   
  )
}

export default UserDashBoard