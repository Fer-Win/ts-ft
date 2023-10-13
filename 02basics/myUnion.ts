let score:number | string = 33; 



type User = {
  name : string;
  id: number
}

type Admin = {
  username : string;
  id: number
}

let ferwin : User | Admin;

ferwin = {username:"Hey" , id:25}


// function getDbId(id:number|string){
//   console.log(`DB d is:${id}`);
  
// }
getDbId(3);
getDbId("3");

function getDbId(id:number|string){
  if (typeof id === 'string'){
    id.toUpperCase()
  }
  else{
    return id+2
  }
  
}

const dataa: number[] = [1,2,3]
const dts : string[] = ['2']

// const data2 : string[] | number [] = ['hey',2]
const data2 : (string | number) [] = ['hey',2]


let pi:3.4 

// pi =4.5

let seatAllotment : 'aisle' | 'middle'|'window'

// seatAllotment = 'frontseat'

export{}