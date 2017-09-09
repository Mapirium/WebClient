import angular from 'angular';

import mapService from './mapService/mapService'
import pointDefinitionService from './pointDefinitionService/pointDefinitionService'
import fieldDefinitionService from './fieldDefinitionService/fieldDefinitionService';
import pointDataService from './pointDataService/pointDataService';

let servicesModul = angular.module('app.services', [
    mapService.name,
    pointDefinitionService.name,
    fieldDefinitionService.name,
    pointDataService.name
]);

export default servicesModul;