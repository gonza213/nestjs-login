import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt'
import { Usuario } from 'src/users/users.model';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const valid = await bcrypt.compare(password, user?.password)

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: Usuario){

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        uid: user.id,
      }),
      user
    };

  
  }

  async singup(loginUserInput: LoginUserInput){
    const user = await this.usersService.findOne(loginUserInput.username)

    if(user){
      throw new Error("User already exists!");
    }

    const password = await bcrypt.hash(loginUserInput.password, 10)

    return this.usersService.create({
      ...loginUserInput,
      password
    })
  }
}
