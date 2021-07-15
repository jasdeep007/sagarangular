import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  obserdata: BehaviorSubject<any> = new BehaviorSubject({
    name: 'outtm', age: 3
  });
  datafromparent: { name: string, age: number } = {
    name: 'outtm', age: 3
  };

  loopdata: number[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let y = 0; y < 100; y++) {
      this.loopdata.push(y);
    }
  }
  sendnewReferenceToChild() {
    this.datafromparent = { name: 'new reference', age: 89 };
  }
  sendoldReferenceToChild() {
    for (let y = 0; y < 10000000; y++) {
      this.datafromparent.age = this.datafromparent.age + y;
    }
    this.datafromparent.name = 'old reference';
  }
  changevalue(data: any) {
    //this.datafromparent = data;
  }
  inputchange(searchValue: any) {
    for (let u = 0; u < this.loopdata.length; u++) {
      this.datafromparent.age = parseInt(searchValue.target.value);
      //this.datafromparent = { name: 'anything', age: parseInt(searchValue.target.value) };
    }

    this.obserdata.next(this.datafromparent);
    //this.datafromparent.age = parseInt(searchValue.target.value);
  }
}
