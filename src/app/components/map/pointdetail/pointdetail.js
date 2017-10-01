import angular from 'angular';

import template from './pointdetail.html';
import controller from './pointdetail.controller.js';

let pointdetailModule = angular.module('pointdetail', [])
    .component('pointdetail', {
        template,
        controller,
        bindings: {
            point: '<'
        }
    });

export default pointdetailModule;