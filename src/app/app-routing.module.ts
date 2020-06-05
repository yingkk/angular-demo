import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndexComponent } from "./components/router/index/index.component";
import { NewsComponent } from "./components/router/news/news.component";
import { GoodsComponent } from "./components/router/goods/goods.component";
import { NewsdetailComponent } from './components/router/newsdetail/newsdetail.component';
import { GoodsdetailComponent } from './components/router/goodsdetail/goodsdetail.component';


import { MaleComponent } from './components/router/male/male.component';
import { FemaleComponent } from './components/router/female/female.component';
import { WelcomeComponent } from './components/router/female/welcome/welcome.component';
import { SettingComponent } from './components/router/female/setting/setting.component';
import { DescComponent } from './components/router/male/desc/desc.component';
import { ListComponent } from './components/router/male/list/list.component';

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
  // {
  //   // 匹配不到路由时
  //   path: "**",  // 匹配任意路由
  //   redirectTo: "index"
  // },
  {
    path: "male",
    component: MaleComponent,
    children: [
      {
        path: "desc",
        component: DescComponent,
      },
      {
        path: "list",
        component: ListComponent,
      },
      {
          // 匹配不到路由时
          path: "**",  // 匹配任意路由
          redirectTo: "desc"
        },
    ]
  },
  {
    path: "female",
    component: FemaleComponent,
    children: [
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: "setting",
        component: SettingComponent,
      },
      {
        // 匹配不到路由时
        path: "**",  // 匹配任意路由
        redirectTo: "welcome"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
