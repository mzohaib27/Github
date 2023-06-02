
class details  {
    constructor(namess,agess,formNumberss){
        this.name = namess;
        this.age = agess;
        this.formNumber = formNumberss;
    }
    submit(){
        console.log(
        `${this.name} Your Admission Form form num ${this.formNumber} is Submited
        because your AGE is ${this.age} `)
    }
          cancel(){
            console.log(`${this.name} Your Admission Form form num ${this.formNumber} is Cancelled
         because your age is ${this.age} that is under 18`)
         }
   }

class GPGCJ extends details {
  constructor(){
    super()
  }
   
    welcome(){
        console.log(`Welcome to Govt Post Graduate College Jhelum`);
    }
    AdmissionSuccess(){
        console.log(`Your Admission is successfully Approved`);
        
    }
    AdmissionDenied(){
        console.log(`Your Admission is Denied` ); 
    }
};
 
// let names = prompt("Enter your name : ")
// let ages = prompt("Enter your age : ")
// let formNumbers = prompt("Enter your formNumber : ")

// let EnterDetails = new details(names,ages,formNumbers)   

// let clg = new GPGCJ("zohaib",24,4567);

 
//  const a =()=>{
//     if(ages>18){
//         console.log(clg.welcome())
//         console.log(EnterDetails.submit())
//         console.log(clg.AdmissionSuccess())
//     }
// }
//    const b = () => {
//     if(ages<18){
//         console.log(clg.AdmissionDenied())
//         console.log(EnterDetails.cancel())
//     } 
// }

// (ages>18)?a():b();




