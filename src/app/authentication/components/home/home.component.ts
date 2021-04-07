import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { AppURL } from 'src/app/app.url';
// declare const Apps: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private map: string;
  private thailand: string;
  constructor() {
    // this.showmapRailway();
  }


  ngOnInit(): void {

    this.map = new Map({
      target: 'mapOpenLayer',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        projection: "EPSG:4326",
        center: [100.5951, 13.7180],
        zoom: 6
      })
    });
    // Apps.initialLoadMap();

    // this.map = new Map({
    //   maxZoom: 9,
    //   source: new Map.source.ImageWMS({
    //     ratio: 1,
    //     params: { 'LAYERS': 'RAILWAY:THAILAND' },
    //     url: 'http://122.155.174.9:8081/geoserver/RAILWAY/wms',
    //     crossOrigin: "Anonymous"
    //   })
    // });
  }


  // ขอบเขตจังหวัด
  showmapRailway() {
  //   var BUILDING_47 = new ol.layer.Image({
  //     source: new ol.source.ImageWMS({
  //       ratio: 1,
  //       url: 'http://122.155.174.9:8081/geoserver/RAILWAY/wms',
  //       params: {"LAYERS": 'RAILWAY:BUILDING_47'},
  //       serverType:'geoserver'
  //     })
  //   });
  }

}
