import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, forkJoin, interval, Observable, of, zip } from 'rxjs';

@Component({
  selector: 'firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.params['id']);

    // this.route.params.subscribe((params: Params) => {
    //   const id = (params['id']);
    // });
  }
  callpromise() {
    this.data = [];
    this.methodA().then(value => {
      this.methodB().then(val => {
        this.methodC().then(v => { });
      });
    });
  }
  callobservable() {
    this.data = [];
    // this.methodAA().subscribe((value: any) => {
    //   this.data.push(value);
    //   this.methodBB().subscribe((val: any) => {
    //     this.data.push(val);
    //     this.methodCC().subscribe((v: any) => {
    //       this.data.push(v);
    //     });
    //   });
    // });

    // forkJoin({ a: this.methodAA(), b: this.methodBB(), c: this.methodCC() })
    //   .subscribe(({ a, b, c }) => {
    //     alert();
    //     this.data.push(a);
    //     this.data.push(b);
    //     this.data.push(c);
    //   });

    combineLatest(this.methodAA(),this.methodBB(),this.methodCC())
    .subscribe(([a,b,c]) => {
      this.data.push(a);
      this.data.push(b);
      this.data.push(c);
    });

    // zip(this.methodAA(),this.methodBB(),this.methodCC())
    // .subscribe(([a,b,c]) => {
    //   this.data.push(a);
    //   this.data.push(b);
    //   this.data.push(c);
    // });
  }
  data: string[] = [];
  methodAA(): Observable<string> {
    return of('B');
  }
  methodBB(): Observable<string> {
    return new Observable<string>(observer => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next((count++).toString());
        if(count>=10){clearInterval(interval); observer.complete(); observer.unsubscribe();}
        console.log('interval fired');
      }, 1000);
    });
  }
  methodCC() {
    return of('C');
  }
  methodA(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('A');
        this.data.push('A1');
        resolve('');
      }, 2000);
    });
  }
  methodB(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('B');
        this.data.push('B1');
        resolve('');
      }, 1000);
    });
  }
  methodC(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('C');
        this.data.push('C1');
        resolve('');
      }, 500);
    });
  }
}
