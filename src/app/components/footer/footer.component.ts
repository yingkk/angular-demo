import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { AsyncService } from "../../services/async/async.service";
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public asyncService: AsyncService) { }

  footerName: string = "我是footer";

  ngOnInit() {
    // 1._callBack异步
    this.asyncService.getDataWithCallback((data) => {
       console.log("_callback", data);
    });

    // 2.Promise异步
    this.asyncService.getDataWithPromise().then((data) => {
      console.log("promise", data);
    });

    // 3.rx.js -observable异步
    this.asyncService.getDataWithObservable().subscribe((data) => {
      console.log("observable-subscribe", data);
    });

    // 4.rx.js -observable异步超过1秒取消订阅(操作)
    const stream = this.asyncService.getDataWithObservable();
    const result = stream.subscribe((data) => {
        console.log("observable-unsubscribe", data);
    });
    // 超过一秒撤销订阅,即超过一秒撤回操作
    setTimeout(() => {
       result.unsubscribe(); // 取消订阅
    }, 1000);


     // 5.rx.js多次执行
    // const streams = this.asyncService.getDataWithMoreTimes();
    // const excutorResult = streams.subscribe((data) => {
    //    console.log(data);
    //  });

     // rx.js工具方法 filter map
    // const numStream =  this.asyncService.getNum();
    // numStream.pipe(
    //    filter((value: any) => {
    //      if (value % 2 === 0) {
    //        return true;
    //      }
    //    }),
    //   map((value: any) => {
    //     return value * value;
    //   })
    // ).subscribe((data) => {
    //   console.log(data);
    // });

  }
  run() {
    console.log("我是footer里的run方法");
  }
}
