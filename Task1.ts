class Customer{
   public custNo:number=0;
   public custName:string="";
   public custCity:string="";

   constructor(custNo:number=0, custName:string="", custCity:string=""){
       this.custNo=custNo;
       this.custName=custName;
       this.custCity=custCity;
   }

   showCustomerDetails():void{
           console.log("Customer Details :: Id: "+this.custNo+", Name: "+this.custName+", City :"+this.custCity);
   }

  
   
}

let custObj1:Customer=new Customer();
let custObj2:Customer=new Customer(121);
let custObj3:Customer=new Customer(1213,"Komal");
let custObj4:Customer=new Customer(1213,"Koaml", "Pune");

   custObj1.custNo=10;
   custObj1.custName="Komal";
   custObj1.showCustomerDetails();
   console.log("---------------");
   custObj2.showCustomerDetails();
   console.log("---------------");
   custObj3.showCustomerDetails();
   console.log("---------------");
   custObj4.showCustomerDetails();