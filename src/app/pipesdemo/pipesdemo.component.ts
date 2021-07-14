import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:string[]=[]; // 3000 rows
  num :number =5;
  changevalue(): number {
    console.log('method called');
    return this.num * this.num * this.num;
  }

}
