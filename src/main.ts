// import express from "express";
// const app = express();
// import EmployeeController from "./Controller/Employee.Controller";

// app.get("/user",EmployeeController.getEmployee);

// app.get("/allusers",EmployeeController.getAllEmployee);

// app.all("*",(req,res)=>{
//     return res.json({Message:"INVALID ROUTE"})
// })

import EmployeeRoutes from './Routes/Employee.router'
class Main {
    public static configureRoutes(app:any): void {
        app.use(EmployeeRoutes);
    }
}

export default Main;
