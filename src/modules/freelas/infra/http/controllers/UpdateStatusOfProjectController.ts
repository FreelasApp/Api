import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateStatusOfProjectService from '@modules/freelas/services/UpdateStatusOfProjectService';
import AppError from '@shared/errors/AppError';

class ListFreelaByIdController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { freela_id, status } = request.body;

    const updateStatusOfProjectService = container.resolve(
      UpdateStatusOfProjectService,
    );
    console.log(status);
    const freela = await updateStatusOfProjectService.execute({
      freela_id,
      status: status as 'open' | 'in-progress' | 'concluded',
      user_id: id,
    });

    return response.status(201).json(freela);
  }
}

export default ListFreelaByIdController;
