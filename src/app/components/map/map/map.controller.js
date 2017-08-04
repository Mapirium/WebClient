class MapController {
    
    /*@ngInject*/
    constructor($stateParams) {
        this.$stateParams = $stateParams;
        this.content = 'Hello, Map';

        this.currentMap = this.getCurrentMap();
    }

    getCurrentMap(){
        return this.$stateParams.mapId;
    }
    
}

export default MapController;