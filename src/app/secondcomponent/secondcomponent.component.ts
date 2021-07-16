import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SecondcomponentComponent implements OnInit {

  @Input('data') data:any;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data.subscribe((value:any)=>{
      this.data=value; 
    });
  }

}
