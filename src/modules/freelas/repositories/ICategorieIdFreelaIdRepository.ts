import ICreateCategorieIdFreelaIdRepository from '../dtos/ICreateCategorieIdFreelaId';
import CategorieIdFreelaId from '../infra/typeorm/entities/CategorieIDFreelaId';

export default interface ICategorieIdFreelaIdRepository {
  findByFreelaId(id: string): Promise<CategorieIdFreelaId[]>;
  create(
    data: ICreateCategorieIdFreelaIdRepository,
  ): Promise<CategorieIdFreelaId>;
}
