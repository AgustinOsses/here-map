import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GetMapaService } from 'src/app/service/get-mapa.service';
declare var H: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
   @ViewChild("mapa")
    public mapElement!: ElementRef;

    @Input()
    public width: any;
    
    @Input()
    public height: any;

    public lat: any;

    public lng: any;

    private map: any;

    private platform: any;

  constructor(
    private serviceMapa: GetMapaService
  ) {
    this.platform = new H.service.Platform({
      "apikey": 'yCHq6PrIhzcv4kUkMDWJM9HkCZYo5EmKT0Iil1njrms'
  });
   }

  ngOnInit(): void {
    
    this.serviceMapa.getCoordenadas().subscribe((e: any) => {
      this.lat = e.listaMarcadores[0].latitud
      this.lng = e.listaMarcadores[0].longitud

      this.createMap(this.lat,this.lng )
      this.dropMarker(e.listaMarcadores) 
    })    
  }


createMap(lat: any, lng: any){
  let defaultLayers = this.platform.createDefaultLayers();
  this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
          zoom: 10,
          center: { lat: lat ,lng: lng}
      }
  );
  
}

private dropMarker(coordenadas: any) {
  for(let i = 0; i < coordenadas.length; i++) {
    let marker = new H.map.Marker({ "lat": coordenadas[i].latitud, "lng": coordenadas[i].longitud });
    this.map.addObject(marker);
  }
  }
}
