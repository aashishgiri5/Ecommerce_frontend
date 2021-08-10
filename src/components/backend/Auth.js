const API = "http://localhost:8080/api/user"
const API2 = "http://localhost:8080/api/category"


export const createUser=(data)=>{
    return fetch(`${API}/create`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
            

        },
        body:JSON.stringify(data)
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}


export const loginUser=(data)=>{
    return fetch(`${API}/login`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
            

        },
        body:JSON.stringify(data)
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}

export const authenticate=(data,next)=>{
    if(typeof window!=="undefined"){
       localStorage.setItem("userInfo",JSON.stringify(data));
       next()
    }
    
}

export const isAunthenticated=()=>
{
    if(typeof window==="undefined"){
        return false;
    
    }
    if(localStorage.getItem("userInfo")){
        return JSON.parse(localStorage.getItem("userInfo"));
    }
    else{
        return false;
    }
}

export const createCategory=(data,user)=>{
    data.createdBy=user.email;
    return fetch(`http://localhost:8080/api/category/createCat`,{
        method:"POST",
        headers:{
             Authorization:`Bearer ${user.token}`,
             Accept: "application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}