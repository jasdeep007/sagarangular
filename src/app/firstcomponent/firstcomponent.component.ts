import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, forkJoin, interval, observable, Observable, of, zip } from 'rxjs';

@Component({
  selector: 'firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {



  constructor(private route: ActivatedRoute) { }
  data: string[] = [];



  call3methods() {
    this.first().then((value) => {
      this.second().then((val)=>{
        this.third().then((message)=>{
          alert(message);
        });
      });
    });
  }

  first(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('after 5 seconds from first method');
        resolve('');
      }, 8000);
    })
  }
  second(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('after 2 seconds from second method');
        resolve('');
      }, 3000);
    })
  }
  third(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('after 1 seconds from third method');
        resolve('All completed');
      }, 1000);
    });
  }

  ngOnInit(): void {

    //alert(this.route.snapshot.params['id']);

    this.route.params.subscribe((params: Params) => {
      const id = (params['id']);
    });

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
    // this.methodAA().subscribe((value: any) => { // get states
    //   this.data.push(value);
    //   this.methodBB().subscribe((val: any) => { // get cities
    //     this.data.push(val);
    //     this.methodCC().subscribe((v: any) => { // get villages
    //       this.data.push(v);            
    //     });
    //   });
    // });


    // loader show krna
    // jab tk,,, 3 api calls complete ni hojati




    // forkJoin({ a: this.methodAA(), b: this.methodBB(), c: this.methodCC() })
    //   .subscribe(({ a, b, c }) => {
    //     alert();
    //     this.data.push(a);
    //     this.data.push(b);
    //     this.data.push(c);
    //   });

    combineLatest(this.methodAA(), this.methodBB(), this.methodCC())
      .subscribe(([a, b, c]) => {
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

  methodAA(): Observable<string> {
    return of('A');    
  }
  methodBB(): Observable<string> {
    return new Observable<string>(observer => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next((count++).toString());
        if (count >= 10) { 
          clearInterval(interval); observer.complete(); observer.unsubscribe(); 
        }
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
