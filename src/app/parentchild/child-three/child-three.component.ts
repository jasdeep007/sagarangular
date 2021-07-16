import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildThreeComponent implements OnInit {

  @Input('data') data: any;
  constructor(private cd: ChangeDetectorRef) { 
    this.cd.detach();
  }

  ngOnInit(): void {
    this.data.subscribe((value: any) => {
      this.data = value;
      this.cd.detectChanges(); 
    });
  }
  detach() {
    this.cd.detach();     // mark for check
  }
  reatach() {
    this.cd.reattach();
  }
}
