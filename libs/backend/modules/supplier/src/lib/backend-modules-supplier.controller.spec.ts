import { Test } from '@nestjs/testing';
import { BackendModulesSupplierController } from './backend-modules-supplier.controller';

describe('BackendModulesSupplierController', () => {
    let controller: BackendModulesSupplierController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [],
            controllers: [BackendModulesSupplierController],
        }).compile();

        controller = module.get(BackendModulesSupplierController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });
});
