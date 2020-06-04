import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  // 1.回调函数异步
  getDataWithCallback(_callBack: any ) {
    setTimeout(() => {
      const userName = "张三";
    _callBack (userName);
    }, 1000);
  }

  // 2.Promise异步
  getDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userName = "张三";
        resolve (userName);
      }, 1000);
    });
  }

  // 3.rx.js 的Observable
  getDataWithObservable() {
    return new Observable((observer) => {
      setTimeout(() => {
        const userName = "张三";
        observer.next(userName);
      }, 3000);
    });
  }

  // 4.rx.js多次执行
  getDataWithMoreTimes() {
    let count = 0;
    return new Observable((observe) => {
     setInterval(() => {
       count++;
       const msg: string = "rx.js第" + count + "次执行";
       observe.next(msg);
     }, 1000);
    });
  }

  getNum() {
    let count = 0;
    return new Observable((observe) => {
     setInterval(() => {
       count++;
       observe.next(count);
     }, 1000);
    });
  }

}

  


