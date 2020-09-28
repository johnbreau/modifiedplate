import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BricksetService {
  public setInfo: any;

  constructor(public http: HttpClient) { }

bricksetGet() {
  // tslint:disable-next-line:max-line-length
  this.http.get<any>('https://brickset.com/api/v3.asmx/getSets?apiKey=3-gFmp-2ozg-EA6DI&userHash=johnbreau&params=6670').subscribe(data => {
  this.setInfo = data;
  console.log('set', this.setInfo);
  });
}
}

