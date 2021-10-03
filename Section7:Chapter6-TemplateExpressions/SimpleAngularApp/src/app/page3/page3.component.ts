import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  pageNameDemo = 'page 3 display';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageNameDemo = 'Third page display';
    }, 5000); 
  }

}
