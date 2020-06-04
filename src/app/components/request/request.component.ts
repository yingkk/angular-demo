import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AxiosService } from "../../services/axios/axios.service";



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  list: any[] = [];

  constructor(public http: HttpClient,
              public axios: AxiosService) { }

  ngOnInit(): void {
  }

  getData() {
    const api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response: any) => {
       this.list = response.result;
       // console.log(response);
    });
  }

  login() {
    console.log("login");
    // const api = "";
    // const options = {headers : new HttpHeaders({ "Content-Type": "application/json" })};
    // this.http.post(api, {"userName": "zhangsan", "age": 40}, options).subscribe((response) => {
    //    console.log(response);
    //  });
  }
  getJsonpData() {
    // 确认接口支不支持jsonp格式请求 ,在url后面加上?callback = xxx 或者 ?cb = xxx 若返回格式;xxx(...)则表示支持
    const api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api, "callback").subscribe((response) => {
       console.log(response);
    });
  }

  getAxiosData() {
    const api = "http://a.itying.com/api/productlist";
    this.axios.get(api).then((response: any) => {
      console.log(response.data.result);
    });
  }
}
