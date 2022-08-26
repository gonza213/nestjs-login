import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { AuthGuard } from '@nestjs/passport';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService){}

    @Mutation(() => LoginResponse)
    @UseGuards(AuthGuard('local'))
    login(@Args('LoginUserInput') loginUserInput: LoginUserInput){
        return this.authService.login(loginUserInput)
    }
}
