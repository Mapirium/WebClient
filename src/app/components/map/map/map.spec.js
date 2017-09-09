import MapModule from './map';
import MapController from './map.controller.js';
import MapTemplate from './map.html';

describe('Map', () => {
    let $rootScope, makeController;

    beforeEach(window.module(MapModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new MapController();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        it('has a name property [content]', () => {
            let controller = makeController();
            expect(controller.content).toBe('Hello, Map');
        });
    });

    describe('Template', () => {
        // use regex to ensure correct bindings are used e.g., {{  }}
        it('has template', () => {
            expect(MapTemplate).length > 0;
        });
    });

});