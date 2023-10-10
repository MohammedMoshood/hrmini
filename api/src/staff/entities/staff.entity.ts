import { Status } from '../enum/status.enum';
import { Gender } from '../enum/gender.enum';
import { User } from './../../auth/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { eager: false })
  user: User;

  @Column()
  userId: number;

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
  jobTitle: string;

  @Column()
  gender: Gender;

  @Column()
  status: Status;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ default: null })
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
