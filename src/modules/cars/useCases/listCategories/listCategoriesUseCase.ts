import { Category } from "../../entities/Category";
import { IcategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: IcategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
