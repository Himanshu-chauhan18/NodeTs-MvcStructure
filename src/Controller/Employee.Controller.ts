import db from '../../config/db.connection'
// import logger from '../../config/logger';
class EmployeeData{
    public async getEmployee(req:any,res:any){
        try{
            let emplist:any = [{name:"himanshu",age:23}];
            return res.json({data:emplist})
        }catch(e:any){
            // logger.info('Error Log',e.message);
        }       
        return res.status(503).json({"Message":"INTERNAL SERVER ERROR"});
    }
    public async getAllEmployee(req:any,res:any){
        let sqlQuery = `SELECT SQL_CALC_FOUND_ROWS Id, Name, Age, City FROM employeemaster`;
            // console.log(sqlQuery)
        const [rows, _] = await db.query(sqlQuery);
        return res.json({data:rows})
    }
}
export default new EmployeeData();