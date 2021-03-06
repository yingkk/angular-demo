import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // 该p标签的样式只作用于HeaderComponent的p标签，且@Component.styles下的样式必须是CSS
  styles: ['p { font-weight: normal; }']
})
export class HeaderComponent implements OnInit, OnChanges, AfterViewInit {
  // 获取dom节点
  @ViewChild("appHeader") appHeader: any;
  // 接收父组件传递的数据
  @Input() pageName: any;
  // 接收父组件的方法
  @Input() run: any;
  // 接收父组件实例
  @Input() home: any;


  msg: string = "我是子 组件header的msg";


  constructor() { }

  ngOnInit() {
    // 组件和指令初始化完成，不是真正的dom加载完成
    //  const div: any = document.getElementById("header");
    //  div.style.backgroundColor = "red";
  }
  // 视图加载完成的方法
  ngAfterViewInit() {
    // const div: any = document.getElementById("header");
    // div.style.width = "100px";
    // div.style.height = "60px";
    // div.style.backgroundColor = "red";

    console.log(this.appHeader.nativeElement);
    this.appHeader.nativeElement.style.width = "200px";
    this.appHeader.nativeElement.style.height = "40px";
    this.appHeader.nativeElement.style.backgroundColor = "blue";

  }
  // 执行父组件方法
  getParentMethod() {
    console.log(this.home);
    this.run();
  }

  childMethod() {
    console.log("我是子组件header的方法childMethod");
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    console.log("ngOnChanges", changes);
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        const changeProp = changes[prop];
        console.log(changeProp.currentValue);
      }
    }
  }
}
