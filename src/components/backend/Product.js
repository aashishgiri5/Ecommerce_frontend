const API = "http://localhost:8080/api/product"

export const createProduct=(data,token)=>{
   const formData=new FormData();
   for (const [key, value] of Object.entries(data)) {
  formData.append(key,value);
}

    return fetch(`${API}/createProduct`,{
        method:"POST",
        headers:{
          //  Accept: "application/json",
          //  "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
            

        },
        body:formData
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}


export const getAllProduct=(token)=>{
    return fetch(`${API}/getAll`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
            

        },
        
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}

export const deleteProduct=(id,token)=>{
    return fetch(`${API}/delete/${id}`,{
        method:"DELETE",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
            

        },
        
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}


export const updateProductById=(token,id,data)=>{
    return fetch(`${API}/update/${id}`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
            

        },
        body:JSON.stringify(data)
        
    }).then (resp=>{
       return resp.json();
    }).catch(err=>{
        console.log(err)
    })

    
}