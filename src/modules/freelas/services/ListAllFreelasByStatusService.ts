import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
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

  constructor(
    @inject('FreelaRepository')
    freelaRepository: IFreelaRepository,
    @inject('CategorieIdFreelaIdRepository')
    categorieIdFreelaIdRepository: ICategorieIdFreelaIdRepository,
  ) {
    this.freelaRepository = freelaRepository;
    this.categorieIdFreelaIdRepository = categorieIdFreelaIdRepository;
  }

  public async execute(status: string): Promise<IResponse[]> {
    if (!status) {
      throw new AppError('a status is required');
    }

    const freelas = await this.freelaRepository.findByStatus(status);

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
