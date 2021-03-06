import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageName: string = "首页2";

  @ViewChild("footer") footer: any;

  constructor() { }

  ngOnInit(): void {
  }
  run() {
    console.log("我是父组件的run方法");
  }
  getChildData() {
    // 父组件获取子组件的数据 可子组件加id,引入ViewChild,获取整个子组件实例
     console.log(this.footer.footerName);
  }
  getChildMethod() {
    // 父组件获取子组件的方法
    this.footer.run();

  }

}
