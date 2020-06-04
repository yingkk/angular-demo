import { Component, OnInit } from '@angular/core';

import { StorageService } from "../../../services/storage/storage.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keywords: any = "";
  historyList: any[] = [];

  constructor(public storageService: StorageService) {
    console.log(this.storageService.getData());
   }

  ngOnInit() {
   const searchList: any = this.storageService.get("searchList");
   if (searchList) {
    this.historyList = searchList;
   }
   console.log("init", this.historyList);
  }

  searchHandler() {
    console.log(this.historyList);
    if (this.historyList.indexOf(this.keywords) === -1){
      this.historyList.push(this.keywords);
    }
    this.storageService.set("searchList", this.historyList);
    this.keywords = "";
  }

  deleteKeywordsHandler(key: number) {
   this.historyList.splice(key, 1);
   this.storageService.set("searchList", this.historyList);
  }

  run() {
    console.log("我是search里的run方法");
  }
}
