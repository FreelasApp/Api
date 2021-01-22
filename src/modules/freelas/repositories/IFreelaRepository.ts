import ICreateFreelasDTO from '@modules/freelas/dtos/ICreateFreelasDTO';
import Freelas from '@modules/freelas/infra/typeorm/entities/Freelas';

export default interface IFreelasRepository {
  findByStatus(status: string): Promise<Freelas[]>;
  findById(id: string): Promise<Freelas | undefined>;
  create(data: ICreateFreelasDTO): Promise<Freelas>;
  save(freela: Freelas): Promise<Freelas>;
}
