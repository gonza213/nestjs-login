import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Usuario extends Model {
  @Column({primaryKey: true})
  id: number;

  @Column
  username: string;

  @Column
  password: string
}