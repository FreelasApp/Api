import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';

class UpdateAvatarController {
  public async index(request: Request, response: Response): Promise<Response> {
    const updateProfileService = container.resolve(UpdateProfileService);
    const { description, email, firstName, lastName } = request.body;
    const { id } = request.user;

    const user = await updateProfileService.execute({
      id,
      description,
      email,
      firstName,
      lastName,
    });

    return response.status(201).json(user);
  }
}

export default UpdateAvatarController;
