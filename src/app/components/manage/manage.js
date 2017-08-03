/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Angular-Modul der Komponenten
 * - Hier werden alle Komponenten als einheitliches Modul exportiert
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 04.12.2015, 2015.
 */
import angular from 'angular';
import createMap from './createMap/createMap';
import fieldDefinition from './fieldDefinition/fieldDefinition';

let manageModule = angular.module('app.componentes.manage', [
    createMap.name, fieldDefinition.name
]);

export default manageModule;