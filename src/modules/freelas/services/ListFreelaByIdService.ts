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
class ListFreelaByIdService {
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

  public async execute(id: string): Promise<IResponse | undefined> {
    if (!id) {
      throw new AppError('a status is required');
    }

    const freela = await this.freelaRepository.findById(id);

    let response;
    if (freela) {
      const catergoriesId = await this.categorieIdFreelaIdRepository.findByFreelaId(
        freela.id,
      );

      response = {
        ...freela,
        categories: catergoriesId.map(item => item.categorie),
      };
    }
    return response;
  }
}

export default ListFreelaByIdService;
