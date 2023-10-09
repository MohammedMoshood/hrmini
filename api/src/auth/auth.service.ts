import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignupDto } from './dto/auth.signup.dto';
import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signUp(authSignupDto: AuthSignupDto): Promise<object> {
    const { companyName, email, password, phone, address } = authSignupDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User();
    user.companyName = companyName;
    user.email = email;
    user.phone = phone;
    user.address = address;
    user.salt = salt;
    user.hashedPassword = hashedPassword;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    try {
      await this.usersRepository.save(user);

      return {
        message: 'Company Created Successfull',
      };
    } catch (error) {
      console.log(error);
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
