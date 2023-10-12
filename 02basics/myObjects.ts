const User = {

  name:'ferwin',
  email:'ferwinlopezt@gmail.com',
  isActive : true
}

function createUser({name: string, isPaid:boolean}){}

createUser({name:'ferwin',isPaid:false})


function createCourse():{name: string,price: number}{
  return {name:'rectjs', price:399}
}


type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?:number
}

function createUsers(user:User): User{
  return {_id:user._id,name:user.name , email:user.email,isActive:user.isActive}
}



let myUser : User ={
  _id:'234',
  name:'Hey',
  email:'h@gmail.com',
  isActive:false 
}

myUser.email= 'ehy there'
// myUser._id = 232


type cardNumber = {
    cardnumber : string
}



type cardDate = {
  cardDate:string
}
type cardDetails = cardNumber & cardDate & {
  cvv: number
}



export {}