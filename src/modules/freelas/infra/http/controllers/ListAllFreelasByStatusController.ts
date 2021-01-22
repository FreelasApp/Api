import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListAllFreelasByStatusService from '@modules/freelas/services/ListAllFreelasByStatusService';

class ListAllFreelasInOpenController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { status } = request.query;
    const user_id = request.user.id;

    const listAllFreelasByStatusService = container.resolve(
      ListAllFreelasByStatusService,
    );

    const freelas = await listAllFreelasByStatusService.execute(String(status));
    const filteredFreelas = freelas.filter(
      freela => freela.user.id !== user_id,
    );

    return response.status(201).json(freelas);
  }
}

export default ListAllFreelasInOpenController;
