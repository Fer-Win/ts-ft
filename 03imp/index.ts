// class User {
//   public email:string
//   name:string
//   private readonly city:string = "Jaipur"
//   constructor(email:string,name:string){
//     this.email = email;
//     this.name = name;
//   }

 
// } 

class User {

  private _courseCount = 1
  
  private readonly city:string = "Jaipur"
  constructor(
    public email:string,
    public name:string
     ){
  }

  private deleteToker(){
    console.log("Token Deleted");
    
  }

   get getAppleEmail():string{
      return `apple:${this.email}`
   }  

   get courseCount():number{
    return this._courseCount
   }

   set courseCount(courseNum){
      if(courseNum<=1){
        throw new Error("Course count should be more than 1");
        
      }
      this._courseCount = courseNum;
   }
} 
const Ferwin = new User("ff@f.com",'Ferwin Lopez'); 
