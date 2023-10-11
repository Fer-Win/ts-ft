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
export {}