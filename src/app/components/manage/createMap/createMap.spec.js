import CreateMapModule from './createMap';
import CreateMapController from './createMap.controller.js';
import CreateMapTemplate from './createMap.html';

describe('CreateMap', () => {
    let $rootScope, makeController;

    beforeEach(window.module(CreateMapModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new CreateMapController();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        it('has a name property [content]', () => {
            let controller = makeController();
            expect(controller.content).toBe('Hello, CreateMap');
        });
    });

    describe('Template', () => {
        // use regex to ensure correct bindings are used e.g., {{  }}
        it('has template', () => {
            expect(CreateMapTemplate).length > 0;
        });
    });

});