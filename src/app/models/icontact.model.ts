import { IBusiness } from "./ibusiness.model";

export interface IContact {
    _id: any | undefined;
    name: string;
    reference: string;
    type: string;
    business?:IBusiness
    state:Number;
}