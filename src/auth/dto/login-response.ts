import {Field, ObjectType} from '@nestjs/graphql'
import { Usuario } from 'src/users/users.model'
import {User} from '../../users/entities/user.entity'

@ObjectType()
export class LoginResponse{
    @Field()
    access_token: string

    @Field(() => User)
    user: User
}