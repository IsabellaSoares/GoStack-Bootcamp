import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

import uploadConfig from '@config/upload';

interface Request {
  userId: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ userId, avatarFilename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(userId);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;