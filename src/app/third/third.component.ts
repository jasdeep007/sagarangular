import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  @Input('data') data: any;
  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    //  alert(this.route.snapshot.params['id']);
  }
  refresh() {
    this.cd.detectChanges();
  }
}
