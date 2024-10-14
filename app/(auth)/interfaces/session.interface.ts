import { IUser } from '@/app/(auth)/interfaces/user.interface';
import { Session } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

export interface ISession extends Session {
  user: AdapterUser & IUser;
}
