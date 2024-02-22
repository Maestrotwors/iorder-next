import { Test } from '@nestjs/testing';
import { BackendModulesAdminController } from './backend-modules-admin.controller';

describe('BackendModulesAdminController', () => {
  let controller: BackendModulesAdminController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [BackendModulesAdminController],
    }).compile();

    controller = module.get(BackendModulesAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
