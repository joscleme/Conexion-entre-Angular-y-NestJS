import { Injectable, HttpException } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    }

    public async getUsers(): Promise<UserDto[]> {
        
        const users = await this.userModel.find().exec(); 

        if (!users || !users[0]) {
            throw new HttpException('Not found', 404);
        }

        return users;
    }

    public async postUser(newUser: UserDto) {
        
        const user = await new this.userModel(newUser);
        return user.save();

    }

    public async getUserById(id: string): Promise<UserDto> {

        const user = await this.userModel.findById(id).exec(); 

        if (!user) {
            throw new HttpException('Not found', 404);
        }

        return user; 

    }

    public async deleteUserById(id: string) {

        return this.userModel.deleteOne({ _id: id }).exec();

    }

    public async updateUserById(id: string, user: UserDto) {

        return this.userModel.findByIdAndUpdate(id, user);

    }

}

