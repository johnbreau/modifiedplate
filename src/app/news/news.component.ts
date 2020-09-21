import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public newsApiData: any;

  constructor(
    public newsService: NewsService,
    public http: HttpClient
  ) { }

  ngOnInit() {
    // this.http.get<any>('https://newsapi.org/v2/everything?q=lego&apiKey=b83de8ac4f38459589d1e694aa9e19dd').subscribe(data => {
    //   this.newsApiData = data.articles;
    //   console.log(data.articles);
    // });

    this.http.get<any>('https://gnews.io/api/v4/search?q=lego&lang=en&token=9ffb592d0defec5409f606bed4ced686').subscribe(data => {
      this.newsApiData = data.articles;
    });
  }

}
