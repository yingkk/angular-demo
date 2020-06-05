import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";  // 双向数据绑定
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";
import { FormComponent } from "./components/main/form/form.component";
import { SearchComponent } from "./components/main/search/search.component";
import { TodoComponent } from "./components/main/todo/todo.component";
import { TransitionComponent } from "./components/transition/transition.component";
import { HomeComponent } from "./components/home/home.component";
import { RequestComponent } from "./components/request/request.component";

// 学习路由相关组件
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

import { StorageService } from "./services/storage/storage.service";
import { AsyncService } from "./services/async/async.service";
import { AxiosService } from "./services/axios/axios.service";







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormComponent,
    SearchComponent,
    TodoComponent,
    TransitionComponent,
    HomeComponent,
    RequestComponent,
    IndexComponent,
    NewsComponent,
    GoodsComponent,
    NewsdetailComponent,
    GoodsdetailComponent,
    MaleComponent,
    FemaleComponent,
    WelcomeComponent,
    SettingComponent,
    DescComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    StorageService,
    AsyncService,
    AxiosService // 声明服务
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
