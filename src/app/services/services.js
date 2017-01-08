import angular from 'angular';

import mapService from './mapService/mapService'

let servicesModul = angular.module('app.services', [
    mapService.name
]);

export default servicesModul;