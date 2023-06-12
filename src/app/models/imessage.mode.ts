import { IContact } from "./icontact.model";

export interface IMessage {
    _id: any | undefined;
    text: String;
    date:Date;
    from?:IContact;
    to?:IContact;
    role:String;
    type:String;
    referenceId:String;
    state:Number;
}