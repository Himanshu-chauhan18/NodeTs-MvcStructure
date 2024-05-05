import express from "express";
const router = express.Router();
import EmployeeController from "../Controller/Employee.Controller";
router.get("/user", EmployeeController.getEmployee);
router.get("/allusers", EmployeeController.getAllEmployee);

export default router;