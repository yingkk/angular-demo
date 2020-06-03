import { Component, OnInit } from '@angular/core';

// 引入服务
import { StorageService } from "../../../services/storage.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  keywords: any = "";
  historyList: any[] = [];
  constructor(public storageService: StorageService) {
    // 构造函数里初始化服务storageService: StorageService 可理解为 var storageService = new StorageService()
    console.log(this.storageService.getData());
   }

  ngOnInit() {
   const todoList: any =  this.storageService.get("todoList");
   if (todoList){
    this.historyList = todoList;
   }
  }
  addTodoHandler(e) {
    const len = this.historyList.filter(item => item.keywords === this.keywords).length;
    if (!len) {
      if (e.keyCode === 13) {
        this.historyList.push({
          keywords: this.keywords,
          status: 0
        });
        this.storageService.set("todoList",  this.historyList);
      }
    }
    this.keywords = "";
  }
  deleteKeywordsHandler(key) {
   this.historyList.splice(key, 1);
   this.storageService.set("todoList",  this.historyList);
  }
  checkboxChangeHandler() {
    this.storageService.set("todoList",  this.historyList);
  }
}
