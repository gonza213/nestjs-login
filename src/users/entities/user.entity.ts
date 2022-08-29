import { ObjectType, Field, Int } from '@nestjs/graphql';
// import {Table, Column, Model} from 'sequelize-typescript'

@ObjectType()
export class User{
 
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

}


