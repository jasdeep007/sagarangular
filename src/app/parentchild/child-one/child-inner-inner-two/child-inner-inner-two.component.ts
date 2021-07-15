import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-inner-inner-two',
  templateUrl: './child-inner-inner-two.component.html',
  styleUrls: ['./child-inner-inner-two.component.css']
})
export class ChildInnerInnerTwoComponent implements OnInit, OnChanges {
  @Input('datatosecondchild') datatosecondchild: any;
  constructor() { }

  ngOnInit(): void {
    for (let y = 0; y < 10000000; y++) {
      this.datatosecondchild.age = this.datatosecondchild.age + y;
    }
    for (let y = 0; y < 10000000; y++) {
      this.datatosecondchild.age = this.datatosecondchild.age + y;
    }
  }

  ngOnChanges() {
    console.log("I am changing !!");
  }
}
