import { inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password, 
    drive_license
  }: ICreateUserDTO): Promise<void> {

    await this.usersRepository.create({
      name,
      username,
      email,
      password, 
      drive_license
    });
  }
}

export { CreateUserUseCase };
