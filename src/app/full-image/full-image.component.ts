import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.scss']
})
export class FullImageComponent implements OnInit, OnDestroy {
  id: number;
  imagePath: string;
  title: string;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       // tslint:disable-next-line:no-string-literal
       this.id = + params['id'];
       // tslint:disable-next-line:no-string-literal
       this.imagePath = params['imagePath'];
       // tslint:disable-next-line:no-string-literal
       this.title = params['title'];

       // In a real app: dispatch action to load the details here.
    });
  }

  previousPage() {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
