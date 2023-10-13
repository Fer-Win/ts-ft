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
  
  private readonly city:string = "Jaipur"
  constructor(
    public email:string,
    public name:string
     ){
  }

 
} 
const Ferwin = new User("ff@f.com",'Ferwin Lopez'); 
