import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-findbigsum',
  templateUrl: './findbigsum.component.html',
  styleUrls: ['./findbigsum.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindbigsumComponent implements OnInit {

  @Input('obser') obser: Observable<any> = of({ name: '', age: 0 });

  data: { name: string, age: number } = { name: '', age: 0 };
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.obser.subscribe((result) => {
      for (let i = 0; i < 10; i++) {
        this.data.age = result.age + i;
      }
      this.cd.detectChanges();
    });

  }
  refresh() {
    this.cd.detectChanges();
  }
}
