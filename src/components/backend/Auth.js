const API = "http://localhost:8080/api/user"

export const createUser=(data)=>{
    return fetch(`${API}/create`,{
        method:"POST",
        headers:{
            "Accept": "application/json",
            "Content-Type":"application/json"
            

        },
        body:JSON.stringify(data)
    }).then (resp=>{
        console.log(resp)
    }).catch(err=>{
        console.log(err)
    })

    
}