// const addTwo =(num:number): number=> {
//   return "num+2"
// }

function addTwo(num:number):number{
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



function getValue(myVal:number){
  if(myVal>5){
    return true
  }
  return '200 OK'
}


const getHello =(s:string):string=>{
  return 'hello there';
}

const heros = ['thor','spiderman','ironman'];


heros.map( (hero):string=>{
  return `hey ${hero}`
})


function consoleError(errmsg:string): void{
  console.log(errmsg);

}
function handleError(errmsg:string): never{
throw new Error(errmsg)  
}

export{}