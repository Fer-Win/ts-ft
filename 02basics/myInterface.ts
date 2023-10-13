interface User3 {
  readonly dbId:number
  email : string,
  userId: number,
  googleId?: string,
  startTrail(): string,
  getCoupon(couponName:string ,value:number):number
}


const hello:User3 = {dbId: 22,email:'h@h.com',userId:2323,
  startTrail:()=>{
    return 'sss'
  },
  getCoupon:(name:'hitesh',id:22)=> {
        return 10
  }
}

hello.email='erer3'