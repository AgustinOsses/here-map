import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMapaService {

constructor(
  private http: HttpClient 
) { }

getCoordenadas() {
  return this.http.get('https://prog3.nhorenstein.com/api/geolocalizacion/GetMarcadores')
}

}
