import angular from 'angular';

import template from './map.html';
import controller from './map.controller.js';
import './map.css';

let mapModule = angular.module('map', [])

    .config(/*@ngInject*/($stateProvider) => {
        $stateProvider.state('map', {
            url: '/map/{mapId}', template: '<map></map>'
        });
    })

    .component('map', {
        template,
        controller
    });

export default mapModule;