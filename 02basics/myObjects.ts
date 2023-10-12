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
    name: string;
    email: string;
    isActive: boolean;
}

function createUsers(user:User): User{
  return {name:user.name , email:user.email,isActive:user.isActive}
}

createUsers({name:'',email:'',isActive:true})



export {}