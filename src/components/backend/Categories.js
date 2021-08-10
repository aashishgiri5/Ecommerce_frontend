const API = "http://localhost:8080/api/category"



export const getAllCategories=(token)=>{
    return fetch(`${API}/getAll`,{
        method:"GET",
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

export const updateCategoryById=(token,id,data)=>{
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


export const getCategoryById=(id,token)=>{
    return fetch(`${API}/delete/${id}`,{
        method:"GET",
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

export const deleteCategory=(id,token)=>{
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