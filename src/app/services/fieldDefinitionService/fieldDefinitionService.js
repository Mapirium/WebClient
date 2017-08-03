import angular from 'angular';
import fieldDefinitionService from './fieldDefinitionService.service.js';

/*@ngInject*/
let fieldDefinitionServiceModule = angular.module('fieldDefinitionService', [])
    .service('fieldDefinitionService', fieldDefinitionService);

export default fieldDefinitionServiceModule;