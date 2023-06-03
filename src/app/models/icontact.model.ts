import { IBusiness } from "./ibusiness.model";

export interface IContact {
    _id: any | undefined;
    name: String;
    reference: String;
    type: String;
    business:IBusiness
    state:Number;
}