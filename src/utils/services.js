export const baseUrl="http://localhost:3001/api";

export const postRequest=async(url,body)=>{
    console.log(body)
    console.log(url)
  const response= await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body
    })

const data=await response.json();
if(!response.ok) {
    let massage

    if (data?.massage){
        massage=data.massage;
    }else{
        massage=data
    }

    return {error:true,massage}
}

    return data;
}