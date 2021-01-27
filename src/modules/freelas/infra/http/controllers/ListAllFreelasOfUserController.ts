import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListAllFreelasOfUserService from '@modules/freelas/services/ListAllFreelasOfUserService';

class ListAllFreelasOfUserController {
  public async index(request: Request, response: Response): Promise<Response> {
    let user_id = request.user.id;
    const { id } = request.query as {
      id: string | undefined;
    };

    if (id) {
      user_id = id;
    }

    console.log(user_id);
    const listAllFreelasOfUserService = container.resolve(
      ListAllFreelasOfUserService,
    );

    const freelas = await listAllFreelasOfUserService.execute(user_id);

    return response.status(201).json(freelas);
  }
}

export default ListAllFreelasOfUserController;
