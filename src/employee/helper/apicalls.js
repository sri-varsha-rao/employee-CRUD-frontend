import {API} from "../../backend";


//employee calls

//create product
export async function createEmployee(employee){
    console.log(employee);
    const response = await fetch(`${API}/create/employee`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(employee)
    });
    if(!response.ok){
        console.log(response);
        return false;
    }
        const jsonResponse=await response.json();

        return jsonResponse;
    
    //.then(response=>{
    //     console.log(employee);
    //     return await response.json();
    // })
    // .catch((err)=>console.log(err));
};

//get employees

export const getAllEmployees = ()=>{
    return fetch(`${API}/getAll`,{
        method:"GET"
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
};

//get an employee
export const getEmployee = employeeId => {
    return fetch(`${API}/get/employee/${employeeId}`,{
        method:"GET"
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));   
};

//update an employee
export const updateEmployee = (employeeId, employee) => {
    return fetch(`${API}/update/employee/${employeeId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json"
        },
        body:employee
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
};


//delete an employee
export const deleteEmployee = (employeeId) => {
    return fetch(`${API}/delete/employee/${employeeId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
    }).then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err));
};
