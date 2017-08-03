import angular from 'angular';
import uiRouter from 'angular-ui-router';

import template from './createMap.html';
import controller from './createMap.controller.js';

let createMapModule = angular.module('createMap', [uiRouter])

    .config(/*@ngInject*/($stateProvider) => {
        $stateProvider.state('createMap', {
            url: '/createMap', template: '<create-map></create-map>'
        });
    })

    .component('createMap', {
        template,
        controller
    });

export default createMapModule;