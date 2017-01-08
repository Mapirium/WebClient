import angular from 'angular';
import mapService from './mapService.service.js';

/*@ngInject*/
let mapServiceModule = angular.module('mapService', [])
    .service('mapService', mapService);

export default mapServiceModule;