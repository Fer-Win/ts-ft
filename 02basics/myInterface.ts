interface User3 {
  readonly dbId:number
  email : string,
  userId: number,
  googleId?: string,
  startTrail(): string,
  getCoupon(couponName:string ,value:number):number
}


interface User3 {
  githubToken:string
}

interface Admin3 extends User3{
    role: "adming" | "ta" |"learner"
}



const hello:Admin3 = {dbId: 22,email:'h@h.com',userId:2323,
  githubToken:'stss',
  role:'learner',
  startTrail:()=>{
    return 'sss'
  },
  getCoupon:(name:'hitesh',id:22)=> {
        return 10
  }
}

hello.email='erer3'