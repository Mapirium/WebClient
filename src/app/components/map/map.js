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
import map from './map/map';
import pointDetail from './pointdetail/pointdetail';
import field from './field/field';

let mapRootModule = angular.module('app.componentes.mapRoot', [
    map.name, pointDetail.name, field.name
]);

export default mapRootModule;