import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-inner-inner-one',
  templateUrl: './child-inner-inner-one.component.html',
  styleUrls: ['./child-inner-inner-one.component.css']
})
export class ChildInnerInnerOneComponent implements OnInit {


  @Input('datatochild') datatochild: any;
  datatosecondchild: any;
  constructor() { }

  ngOnInit(): void {
    for (let y = 0; y < 10000000; y++) {
      this.datatochild.age = this.datatochild.age + y;
    }
    for (let y = 0; y < 10000000; y++) {
      this.datatochild.age = this.datatochild.age + y;
    }
    this.datatosecondchild = this.datatochild;
  }

}
