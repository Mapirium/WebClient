import angular from 'angular';

import template from './field.html';
import controller from './field.controller.js';

let fieldModule = angular.module('field', [])
    .component('field', {
        template,
        controller,
        bindings: {
            fieldDefinition: '<',
            fieldData: '<'
        }

    });

export default fieldModule;