const addTwo =(num:number)=> {
  return num+2
}

function getUpper(val:string){
  return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid:boolean){
  console.log(name,email,isPaid);
  
}

let loginUser=(email:string,name:string, isPaid:boolean =false)=>{}

loginUser("hey","true")

signUpUser("heythere",'2',false)
addTwo(5);

getUpper("Hello There")

export{}