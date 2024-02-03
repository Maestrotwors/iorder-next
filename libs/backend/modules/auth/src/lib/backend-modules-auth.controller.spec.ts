import { Test } from '@nestjs/testing';
import { BackendModulesAuthController } from './backend-modules-auth.controller';

describe('BackendModulesAuthController', () => {
    let controller: BackendModulesAuthController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [],
            controllers: [BackendModulesAuthController],
        }).compile();

        controller = module.get(BackendModulesAuthController);
    });

    it('should be defined', () => {
        expect(controller).toBeTruthy();
    });
});
