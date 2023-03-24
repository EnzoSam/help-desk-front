import { IAssistant } from "./iassistant.model";

export interface ITiket {
    _id: any | undefined;
    customeWhatsappId: String;   
    customeName: String;
    problemDescription:String;
    assistant?:IAssistant;
    state:Number;
    createdAt?:Date;
    updatedAt?:Date;
}