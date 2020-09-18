import { Component, OnInit } from '@angular/core';
import * as data from './cardData.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public cardData: any = data;
  constructor(
  ) { }

  ngOnInit(){
   console.log('test', this.cardData);
  }
}
