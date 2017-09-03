import angular from 'angular';
import pointDataService from './pointDataService.service.js';

/*@ngInject*/
let pointDataServiceModule = angular.module('pointDataService', [])
    .service('pointDataService', pointDataService);

export default pointDataServiceModule;