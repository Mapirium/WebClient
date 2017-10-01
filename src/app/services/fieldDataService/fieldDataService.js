import angular from 'angular';
import fieldDataService from './fieldDataService.service.js';

/*@ngInject*/
let fieldDataServiceModule = angular.module('fieldDataService', [])
    .service('fieldDataService', fieldDataService);

export default fieldDataServiceModule;