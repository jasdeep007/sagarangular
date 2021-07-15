import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnChanges {

  @Input('dataComingFromParent') dataComingFromParent: { name: string, age: number } = {
    name: '', age: 0
  };
  datatochild: { name: string, age: number } = {
    name: '', age: 0
  };

  @Output('datafromchild') datafromchild = new EventEmitter<{ name: string, age: number }>();

  constructor() { }

  ngOnInit(): void {
    console.log('I am changing in child');
    for (let y = 0; y < 10000000; y++) {
      this.dataComingFromParent.age = this.dataComingFromParent.age + y;
    }
    for (let y = 0; y < 10000000; y++) {
      this.dataComingFromParent.age = this.dataComingFromParent.age + y;
    }
    this.datatochild = this.dataComingFromParent;
    console.log('child called');
  }
  ngOnChanges() {
    console.log("I am changing sdsd!!");
  }
  senddatatoparent() {
    // this.dataComingFromParent.name = 'new name';
    // this.dataComingFromParent.age = 90;
    this.dataComingFromParent = { name: 'brand new name other reference', age: 27 };
    this.datafromchild.emit(this.dataComingFromParent);
  }

}
