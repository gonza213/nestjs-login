import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserInput } from './dto/create-user.input';
import { Usuario } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Usuario)
    private userModel: typeof Usuario,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: (await this.userModel.count()) + 1,
    };

    try {
      await this.userModel.create(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Usuario[]> {
    return this.userModel.findAll();
  }

  findOne(username: string): Promise<Usuario> {
    return this.userModel.findOne({
      where: { username },
      raw: true
    });
  }
}
