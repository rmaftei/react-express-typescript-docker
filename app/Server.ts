import {Express, Request, Response, request} from "express";
import express from "express";
import * as path from "path";
import rugbyData from "rugby-data/src/liga-cec-bank/main"

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.use(express.static(path.resolve("./") + "/build/frontend"));

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("You have reached the API!");
        })

        this.app.get("/cecbank", async (req: Request, res: Response): Promise<any> => {
            let cecBankData = await rugbyData.data();

            res.send(cecBankData);
        })

        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}
