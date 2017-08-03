import angular from 'angular';
import pointDefinitionService from './pointDefinitionService.service.js';

/*@ngInject*/
let pointDefinitionServiceModule = angular.module('pointDefinitionService', [])
    .service('pointDefinitionService', pointDefinitionService);

export default pointDefinitionServiceModule;