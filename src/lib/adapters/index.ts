import { container } from 'tsyringe';
import IUserRepository from '@resources/users/repositories/IUserRepository';
import ITokenProvider from './TokenProvider/model/ITokenProvider';
import TokenProvider from './TokenProvider/implementations/JWTProvider';

import IHashProvider from './HashProvider/model/IHashProvider';
import BCryptProvider from './HashProvider/implementations/BCryptProvider';
import IStorageProvider from './StorageProvider/model/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

container.registerSingleton<ITokenProvider>('TokenProvider', TokenProvider);
container.registerSingleton<IHashProvider>('HashProvider', BCryptProvider);
container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
