import FieldDefinitionServiceModule from './fieldDefinitionService';

import FieldDefinitionServiceService from './fieldDefinitionService.service.js';

describe('FieldDefinitionServiceService', () => {
    let $rootScope, makeService;

    beforeEach(window.module(FieldDefinitionServiceModule.name));
    beforeEach(inject((_$rootScope_) => {

        $rootScope = _$rootScope_;
        makeService = () => {
            return new FieldDefinitionServiceService();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Service', () => {
        // service specs
    });
});