import angular from 'angular';

import mapService from './mapService/mapService'
import pointDefinitionService from './pointDefinitionService/pointDefinitionService'
import fieldDefinitionService from './fieldDefinitionService/fieldDefinitionService';
import pointDataService from './pointDataService/pointDataService';
import fieldDataService from './fieldDataService/fieldDataService';

let servicesModul = angular.module('app.services', [
    mapService.name,
    pointDefinitionService.name,
    fieldDefinitionService.name,
    pointDataService.name,
    fieldDataService.name
]);

export default servicesModul;