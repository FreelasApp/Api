import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICategorieIdFreelaIdRepository from '../repositories/ICategorieIdFreelaIdRepository';
import Freelas from '../infra/typeorm/entities/Freelas';
import IFreelaRepository from '../repositories/IFreelaRepository';
import Categories from '../infra/typeorm/entities/Categories';

interface IResponse extends Freelas {
  categories: Categories[];
}

@injectable()
class LIstAllFreelasByStatusService {
  private freelaRepository: IFreelaRepository;

  private categorieIdFreelaIdRepository: ICategorieIdFreelaIdRepository;

  private userRepository: IUserRepository;

  constructor(
    @inject('FreelaRepository')
    freelaRepository: IFreelaRepository,
    @inject('CategorieIdFreelaIdRepository')
    categorieIdFreelaIdRepository: ICategorieIdFreelaIdRepository,
    @inject('UserRepository')
    userRepository: IUserRepository,
  ) {
    this.freelaRepository = freelaRepository;
    this.categorieIdFreelaIdRepository = categorieIdFreelaIdRepository;
    this.userRepository = userRepository;
  }

  public async execute(user_id: string): Promise<IResponse[]> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const freelas = await this.freelaRepository.findAllOfUser(user_id);

    const response = Promise.all(
      freelas.map(async freela => {
        const catergoriesId = await this.categorieIdFreelaIdRepository.findByFreelaId(
          freela.id,
        );

        return {
          ...freela,
          categories: catergoriesId.map(item => item.categorie),
        };
      }),
    );
    return response;
  }
}

export default LIstAllFreelasByStatusService;
