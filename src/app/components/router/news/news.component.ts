import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

   newsList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.newsList = [
      {
        id: 1,
        title: "新闻1"
      },
      {
        id: 2,
        title: "新闻2"
      },
      {
        id: 3,
        title: "新闻3"
      },
      {
        id: 4,
        title: "新闻4"
      }
    ];
  }

}
