import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.user({
      id,
    });
  }
}
