import { Document} from 'mongoose';

export interface IUser extends Document {

    name: string;
    surname: string;
    description: string;
    age: number;

}