import Categories from '../infra/typeorm/entities/Categories';

export default interface ICreateFreelasDTO {
  userId: string;
  title: string;
  description: string;
  price: number;
  categories: Categories[];
}
