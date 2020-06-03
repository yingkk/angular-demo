import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


 // 实例化EventEmitter(事件驱动)
 @Output() private outer = new EventEmitter<string>();

  cityList = [
    {
     code: "shanghai",
     name: "上海"
    },
    {
     code: "xian",
     name: "西安"
    }
  ];

  formData: any = {
    userName: "",
    sex: "male",
    city: "",
    hobbies: [
   {
      code: "eat",
      name: "吃饭",
      checked: false
    },
    {
      code: "sleep",
      name: "睡觉",
      checked: false
    },
    {
      code: "watchTV",
      name: "看电视",
      checked: true
    }
  ],
    remark: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

  sendParent(){
    console.log(11);
    this.outer.emit("我是子组件from的数据");
  }

}
