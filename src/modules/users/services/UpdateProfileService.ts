import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IStorageProvader from '@shared/container/providers/StorageProvider/model/IStorageProvider';
import Users from '../infra/typeorm/entities/Users';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

@injectable()
class UpdateProfileService {
  private userRepository: IUserRepository;

  constructor(
    @inject('UserRepository')
    userRepository: IUserRepository,
  ) {
    this.userRepository = userRepository;
  }

  public async execute({
    id,
    firstName,
    lastName,
    email,
    description,
  }: IRequest): Promise<Users> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError('This user not found');
    }

    if (email !== user.email) {
      const checkEmal = await this.userRepository.findByEmail(email);

      if (checkEmal) {
        throw new AppError('This email is already booked!');
      }
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.description = description;

    await this.userRepository.save(user);

    return user;
  }
}

export default UpdateProfileService;
