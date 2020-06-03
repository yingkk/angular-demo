import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/main/form/form.component';
import { SearchComponent } from './components/main/search/search.component';
import { TodoComponent } from './components/main/todo/todo.component';


import {StorageService} from "./services/storage.service";
import { TransitionComponent } from './components/transition/transition.component';
import { HomeComponent } from './components/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService], // 声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
