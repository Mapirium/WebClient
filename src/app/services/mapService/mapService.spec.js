import MapServiceModule from './mapService';

import MapServiceService from './mapService.service.js';

describe('MapService', () => {
    let $rootScope, makeService;

    beforeEach(window.module(MapServiceModule.name));
    beforeEach(inject((_$rootScope_) => {

        $rootScope = _$rootScope_;
        makeService = () => {
            return new MapServiceService();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Service', () => {
        // service specs
    });
});