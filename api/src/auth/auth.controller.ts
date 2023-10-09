import { AuthService } from './auth.service';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthCredentialDto } from './dto/auth.credential.dto';
import { Post, Body, Controller, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authSignupDto: AuthSignupDto): Promise<object> {
    return this.authService.signUp(authSignupDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }
}
