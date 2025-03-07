import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column()
  password: string;
}
