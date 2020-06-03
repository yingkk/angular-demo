import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  isShowAside: boolean  = false;
  constructor() { }

  ngOnInit(): void {
  }
  asideHandler() {
    this.isShowAside = !this.isShowAside;
    // if (this.isShowAside){
    //       const aside: any =  document.getElementById("aside");
    //       aside.style.transform = "translate(0, 0)";
    // }else {
    // }
  }

}
