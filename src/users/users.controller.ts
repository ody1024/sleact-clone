import {
  Body,
  Controller,
  ForbiddenException,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '회원가입' })
  // @UseGuards(NotLoggedInGuard)
  @Post()
  async join(@Body() data: JoinRequestDto) {
    const user = this.usersService.findByEmail(data.email);
    if (!user) {
      throw new NotFoundException();
    }
    const result = await this.usersService.join(
      data.email,
      data.nickname,
      data.password,
    );
    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }
  }
}
