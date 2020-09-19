import { Component, OnInit } from '@angular/core';
import * as data from '../data/cardData.json';
// import { CtaComponent } from '../shared/cta/cta.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public cardData: any = data;
  public ctaText = 'See More';
  public name: string;

  constructor(
  ) { }

  ngOnInit() {
  }
}
