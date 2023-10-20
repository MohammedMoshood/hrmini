import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update.auth.dto';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { GetUser } from './decorator/get-user.decorator';
import { AuthCredentialDto } from './dto/auth.credential.dto';
import {
  Post,
  Body,
  Controller,
  ValidationPipe,
  Get,
  UseGuards,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard())
  getUser(@GetUser() user: User) {
    delete user.salt;
    delete user.hashedPassword;
    return user;
  }

  @Post('/signup')
  signUp(@Body(ValidationPipe) authSignupDto: AuthSignupDto): Promise<object> {
    return this.authService.signUp(authSignupDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string; user: object }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Patch()
  @UseGuards(AuthGuard())
  update(
    @Body(ValidationPipe) updateAuthDto: UpdateAuthDto,
    @GetUser() user: User,
  ): Promise<User> {
    return this.authService.update(updateAuthDto, user);
  }

  @Delete()
  @UseGuards(AuthGuard())
  remove(@GetUser() user: User): Promise<void> {
    return this.authService.remove(user);
  }
}
