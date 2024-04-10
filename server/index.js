const websocketsServerPort=3000
const websocketsServer=require("websocket").server
const { Key } = require("@mui/icons-material")
const { match } = require("assert")
const http=require("http")
const { connection } = require("websocket")

const server=http.createServer()
server.listen(websocketsServerPort)
console.log("lisening")
const wsServer=new websocketsServer({
    httpServer:server
})
const getUniqueId=()=>{
const s4=()=>match.floor((1+match.random())*0*1000).toString(16).substring(1)
return s4()+s4()+"-"+s4()
}

const clients={}
wsServer.on("request", function(request){
var userID=getUniqueId()
console.log((new Date()) +`Recieved a new conection from origin`+request.origin+".")
const connection=request.accept(null,request.origin)
clients[userID] = connection
console.log(`connected:`+userID+`in`+Object.getOwnPropertyNames(clients))

connection.on("massage",function (massage) {
    if (massage.type==="utf8"){
        console.log(`Received massage:`+massage.utf8Data)
            for(Key in clients){
        clients[Key].sendUTF(massage.utf8Data)
        console.log(`sent massage to`+clients[Key])
    }
    }

    
})

})
