import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {

  // 获取子组件实例
  @ViewChild("appSearch") appSearch: any;

  msg: any = "welcome to my first angular demo";
  title: string = "angular logo";
  content = "<h3>这是一个标签</h3>";
  picUrl = "assets/images/01.jpg";

  userInfos: any[];
  itemList: any[];

  flag: boolean = true;
  orderStatus: number = 1;
  currentDate = new Date();
  inputValue: string;


  constructor() {
    this.userInfos = [
      {
        userName: "张三",
        age: 20
      },
      {
        userName: "李四",
        age: 40
      }
    ],
      this.itemList = [
        {
          type: "student",
          items: [
            {
              name: "张三",
              age: 20
            },
            {
              name: "李四",
              age: 21
            }
          ]
        },
        {
          type: "teacher",
          items: [
            {
              name: "王老师",
              age: 40
            },
            {
              name: "李老师",
              age: 41
            }
          ]
        }
      ];
  }

  ngOnInit(): void {
  }
  ngAfterViewChecked() {
    //this.appSearch.run();
  }
  clickHandler() {
    alert("点击事件");
  }
  getDataHandler() {
    alert(this.title);
  }
  setDataHandler() {
    this.title = "已修改";
  }
  keyDownHandler(e) {
    console.log(e.keyCode, e.target.value);
  }
  changeValueHandler() {
    this.inputValue = "你好你好";
  }
  getValueHandler() {
    console.log(this.inputValue);
  }
  getChildComponentRun() {
    this.appSearch.run();
  }
  run(data: any) {
    console.log("子组件给父组件的数据：" + data);
    console.log("我是父组件main的方法");

  }
}
