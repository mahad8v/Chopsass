import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegisterUserDto } from './dtos/register.dto';

@Controller('users')
export class UsersController {
  //**** create user
  @Post()
  RegisterUserController(@Body() RegisterUserDto) {
    return {};
  }

  //**** get all users
  @Get()
  getAllUser() {
    return [];
  }

  //**** get user by Id
  @Get(':id')
  getUser(@Param('id') id: string) {
    return {
      id,
    };
  }
  //**** update user
  @Put(':id')
  updateUser(@Param('id') id: string) {
    return id;
  }

  //**** delete user
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return id;
  }
}
