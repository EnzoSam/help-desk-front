import { IAssistant } from "./iassistant.model";

export class Tiket {

    constructor(
    public _id: any | undefined,
    public customeWhatsappId: string,
    public customeName: string,
    public problemDescription:string,    
    public state:Number,
    public assistant?:IAssistant,
    public createdAt?:Date,
    public updatedAt?:Date)
    {

    }

    public getStateView():string
    {
        return this.state === 1?'Pendiente':'Cerrado';
    }

    public getCustomerView():string
    {
        return this.customeName && this.customeName != ''?
        this.customeName:this.customeWhatsappId;
    }    
}