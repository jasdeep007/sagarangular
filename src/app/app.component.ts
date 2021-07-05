import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'sagar-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sagardemo';
  variable: string = 'value of variable';
  data: string[] = ['a', 'b', 'c'];
  isActive: number = 3;
  anyvalue:string='1';
  i: number = 0;
  changeclass: string = 'b1';
  style: any = {'background-color':'orange'};
  logicclass:string='b1';
  additem() {
    this.data.push('d');
    this.changeclass = this.changeclass == 'b1' ? 'b2' : 'b1';
  }

  constructor() {
    this.title = 'changed value';
  }

  ngOnInit() {
    this.title = 'changed value';

    if(this.anyvalue.length>3){
      this.logicclass='b2';
    }
    else this.logicclass='b1';
  }

  ngOnDestroy() {

  }
}
