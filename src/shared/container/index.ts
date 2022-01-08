import { container } from "tsyringe";

import { IcategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<IcategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
