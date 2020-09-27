import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as data from '../data/cardData.json';
import { Router } from '@angular/router';
// import { CtaComponent } from '../shared/cta/cta.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  public cardData: any = data;
  public ctaText = 'See More';
  public name: string;

  constructor(public router: Router
  ) { }

  ngOnInit() {
  }

  goToProductDetails(id, imagePath, title) {
    this.router.navigate(['/full-image', id, 'imagePath', imagePath, 'title', title ]);
  }
}
