import { Test, TestingModule } from '@nestjs/testing';
import { CommitsController } from './commits.controller';

describe('CommitsController', () => {
  let controller: CommitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitsController],
    }).compile();

    controller = module.get<CommitsController>(CommitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should has a /getAll endpoint', () => {
    expect(controller).toHaveProperty('getAll')
  })
  it('/getAll should return an object', async () => {
    const all = await controller.getAll()
    expect(typeof all).toBe('object')
  })
  it('the object should contain a property >commits<', async () => {
    const all = await controller.getAll()
    expect(all).toHaveProperty('commits')
  })
});
