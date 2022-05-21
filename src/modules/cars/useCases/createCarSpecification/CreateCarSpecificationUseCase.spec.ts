// import "reflect-metadata";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import {
  CarsRepositoryInMemory
} from "../../repositories/in-memory/CarsRepositoryInMemory";
import {
  SpecificationsRepositoryInMemory
} from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe('Create Car Specification', () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();

    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it('Should be not able to add a new specification to a now-existent car', () => {
    expect( async () => {
      const car_id = '123';
      const specifications_id = ["54321"];
  
      await createCarSpecificationUseCase.execute({ car_id, specifications_id });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category"
    });

    const specification = await specificationsRepositoryInMemory.create({
      name: 'Carro com 4 rodas e portas',
      description: 'Eu já dizei que esse carro têm volante para o motorista?',
    });

    const specificationCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: [specification.id],
    });

    expect(specificationCars).toHaveProperty("specifications");
    expect(specificationCars.specifications.length).toBe(1);
  });
});
