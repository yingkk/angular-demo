import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndexComponent } from "./components/router/index/index.component";
import { NewsComponent } from "./components/router/news/news.component";
import { GoodsComponent } from "./components/router/goods/goods.component";
import { NewsdetailComponent } from './components/router/newsdetail/newsdetail.component';
import { GoodsdetailComponent } from './components/router/goodsdetail/goodsdetail.component';

const routes: Routes = [
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    // get传值
    // path: "newsdetail",
    // 动态路由
    path: "newsdetail/:id",
    component: NewsdetailComponent
  },
  {
    path: "goods",
    component: GoodsComponent
  },
  {
    path: "goodsdetail/:id",
    component: GoodsdetailComponent
  },
  {
    // 匹配不到路由时
    path: "**",  // 匹配任意路由
    redirectTo: "index"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
