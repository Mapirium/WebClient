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
import commonComponents from './common/common';
import securityComponents from './security/security';
import manage from './manage/manage';
import mapRoot from './map/map';

let componentModule = angular.module('app.components', [
    commonComponents.name, securityComponents.name, manage.name, mapRoot.name
]);

export default componentModule;