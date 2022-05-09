import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    public getUsers() {
        return this.userService.getUsers();
    }

    @Post() 
    public postUser(@Body() user: UserDto) {
        return this.userService.postUser(user);
    }

    @Get(':id')
    public async getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }

    @Delete(':id')
    public async deleteUserById(@Param('id') id: string) {
        
        return this.userService.deleteUserById(id);
    }

    @Put(':id')
    public async updateUserById(@Param('id') id: string, @Body() user: UserDto) {
          
        return this.userService.updateUserById(id, user);
    
    }

}
