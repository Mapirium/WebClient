class PointDataService {
    /*@ngInject*/
    constructor($resource, config) {
        this.$resource = $resource;
        this.config = config;

        this.PointData = $resource(config.restEndPoint + '/map/:mapId/point/:pointId', {mapId: '@mapId', pointId: 'pointId'},
            {areaSearch: {method: 'GET', url: config.restEndPoint + '/map/:mapId/point/search/area/:coord'}});
    }

    findPointsInArea(mapId, bounds){
        // Koordinaten auslesen
        var coord = bounds.northEast.lat + "," + bounds.northEast.lng + "," + bounds.southWest.lat + "," + bounds.southWest.lng;
        return this.PointData.areaSearch({"mapId": mapId, "coord": coord});
    }
}

export default PointDataService;