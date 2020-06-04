import { Component, OnInit } from '@angular/core';

//接收url参数需要引入
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.scss']
})
export class NewsdetailComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
   console.log(this.route);
   // get传值 ?
  //  this.route.queryParams.subscribe(({ id }) => {
  //     console.log(id);
  //  });

   // 动态路由 /
   this.route.params.subscribe(({id}) => {
     console.log(id);
   });
  }
}
