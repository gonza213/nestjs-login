import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './users.model';

@Module({
  imports: [SequelizeModule.forFeature([Usuario])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService, SequelizeModule]
})
export class UsersModule {}
