import { IAssistant } from "./iassistant.model";
import { Tiket } from "./tiket.model";

export class ReportResume {

    constructor(
    public dateFrom:Date,
    public dateTo:Date,
    public tikets:Tiket[],
    public assistants:IAssistant[])
    {

    }     
}