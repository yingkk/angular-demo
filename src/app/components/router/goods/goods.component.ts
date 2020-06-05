import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  clickHandler() {
   this.router.navigate(["/goodsdetail/", "1"]);
  }
  clickGetHandler() {
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { "id": 1}
    // };
    // this.router.navigate(["/goodsdetail"], navigationExtras);


    // 也可以不引入NavigationExtras， 但需要保证参数结构对象里有queryParams属性。
    const query = {
      queryParams: { "id": 1}
    };
    this.router.navigate(["/goodsdetail"], query);
  }

}
