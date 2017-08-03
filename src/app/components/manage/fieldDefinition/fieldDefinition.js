import angular from 'angular';

import template from './fieldDefinition.html';
import controller from './fieldDefinition.controller.js';

let fieldDefinitionModule = angular.module('fieldDefinition', [])
    .component('fieldDefinition', {
        template,
        controller,
        bindings: {
            fieldDefinition: '<'
        }
    });

export default fieldDefinitionModule;