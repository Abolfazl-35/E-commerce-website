import React, { useEffect,useState } from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001");

function MainChat() {


const [massage, setMassage] = useState({
    massage:""
})
const [chat, setChat] = useState([])
function addmassage(event) {
    setMassage((prevdata)=>{
        return {...prevdata,[event.target.name]:event.target.value}    
    })
}
console.log(massage)
function sendmassage(params) {
socket.emit("send_massage",{massage:massage.massage})

  }
useEffect(() => {
socket.on("receive_massage",(data)=>{
setChat((prevdata)=>{
return[...prevdata,{lastmassage:data.massage}]
})
})

},[socket])


useEffect( ()=> {
setChat(()=>{
    if (JSON.parse(localStorage.getItem("massages"))) {
        return JSON.parse(localStorage.getItem("massages"))
    }else return []
}
    
    
)

},[])

useEffect(() => {
localStorage.setItem("massages", JSON.stringify(chat))

},[chat])




  return (
    <>
      <div className="flex p-10 min-h-[420px] justify-between items-center flex-col">
        <input
        onChange={addmassage}
          placeholder="massage"
          type="text"
          value={massage.massage}
          name="massage"
          className="outline-none  border-2 border-gray-600"
        />
        <button
        onClick={sendmassage}>Send Massage</button>
   {chat.map((i)=>{
    return <h1>{i.lastmassage}</h1>
   })}
      </div>
    </>
  );
}

export default MainChat;
