import { Test } from '@nestjs/testing';
import { BackendModulesCustomerController } from './backend-modules-customer.controller';

describe('BackendModulesCustomerController', () => {
    let controller: BackendModulesCustomerController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [],
            controllers: [BackendModulesCustomerController],
        }).compile();

        controller = module.get(BackendModulesCustomerController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });
});
