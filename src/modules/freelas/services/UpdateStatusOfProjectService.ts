import { injectable, inject } from 'tsyringe';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';
import Freelas from '../infra/typeorm/entities/Freelas';
import IFreelaRepository from '../repositories/IFreelaRepository';

interface IRequestDTO {
  user_id: string;
  freela_id: string;
  status: 'open' | 'in-progress' | 'concluded';
}

@injectable()
class UpdateStatusOfProjectService {
  private freelaRepository: IFreelaRepository;

  private userRepository: IUserRepository;

  constructor(
    @inject('FreelaRepository')
    freelaRepository: IFreelaRepository,
    @inject('UserRepository')
    userRepository: IUserRepository,
  ) {
    this.freelaRepository = freelaRepository;
    this.userRepository = userRepository;
  }

  public async execute({
    freela_id,
    user_id,
    status,
  }: IRequestDTO): Promise<Freelas> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('user not fond');
    }

    const freela = await this.freelaRepository.findById(freela_id);

    if (!freela) {
      throw new AppError('freela not found');
    }

    if (freela.user_id !== user.id) {
      throw new AppError(
        'this user does not have permission to edit the information of this Freela',
        401,
      );
    }

    if (
      !status ||
      (status !== 'open' && status !== 'concluded' && status !== 'in-progress')
    ) {
      throw new AppError('Status invalid');
    }

    freela.status = status;
    console.log(status);

    await this.freelaRepository.save(freela);

    return freela;
  }
}

export default UpdateStatusOfProjectService;
