import { Request, Response } from "express";

class ServerConfig {
    public static start(app:any,PORT:any): void {
        app.listen(PORT,()=>{
            console.log(`server running on the port ${PORT}`)
        })
    }
    public static HandleInvalidRoute(app:any){
        app.all("*", (req: Request, res: Response) => {
            res.json({ Message: "INVALID ROUTE" });
        });
    }
}

export default ServerConfig;


