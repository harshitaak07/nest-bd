import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return [];
  }

  @Post()
  createOne(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() userUpdate: {}) {
    return userUpdate;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return [];
  }
}
