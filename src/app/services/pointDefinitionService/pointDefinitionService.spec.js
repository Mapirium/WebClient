import PointDefinitionServiceModule from './pointDefinitionService';

import PointDefinitionServiceService from './pointDefinitionService.service.js';

describe('PointDefinitionServiceService', () => {
    let $rootScope, makeService;

    beforeEach(window.module(PointDefinitionServiceModule.name));
    beforeEach(inject((_$rootScope_) => {

        $rootScope = _$rootScope_;
        makeService = () => {
            return new PointDefinitionServiceService();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Service', () => {
        // service specs
    });
});