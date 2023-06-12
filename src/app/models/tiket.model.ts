import { IAssistant } from "./iassistant.model";
import { IContact } from "./icontact.model";

export class Tiket {

    constructor(
    public _id: any | undefined,    
    public problemDescription:string,    
    public state:Number,
    public assistant?:IAssistant,
    public contact?:IContact,
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
        return this.contact &&this.contact !== undefined  &&
        this.contact.name !== ''?
        this.contact.name:this.contact?.reference + '';
    }    

    public getContactReferenceView():string
    {
        return this.contact ?
        this.contact.reference:'';
    }       
}