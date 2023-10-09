import { Status } from '../enum/status.enum';
import { Gender } from '../enum/gender.enum';
import { User } from './../../auth/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { eager: false })
  user: User;

  @Column()
  department: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  age: string;

  @Column()
  gender: Gender;

  @Column()
  status: Status;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: null })
  createdAt: Date;

  @Column({ default: null })
  updatedAt: Date;

  @Column({ default: null })
  deletedAt: Date;
}
