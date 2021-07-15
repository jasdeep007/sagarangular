import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {
  @Input('data') data: any;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    for (let i = 0; i < 1000000; i++) {
      this.data.age = this.data.age + i;
    }
  }
  refresh() {
    this.cd.detectChanges();
  }
}
