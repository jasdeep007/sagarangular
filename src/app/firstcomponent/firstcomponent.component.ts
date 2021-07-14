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

  // A very real time example of this is 
  // getting countries, then states and then cities. its also one time,,
  // but here we are testing,,streams....keep on sending data after 1 second
  // lets run it,,,
  callnewspaperobservable() { // simple method (public by default, as its visible in html also)
    this.A().subscribe((v) => {
      this.data.push(v);
      // when a done,, then second
      this.helloFromnewspaperguy().subscribe((result) => {
        // when this done then third
        this.data.push(result);
        this.B().subscribe((x) => {
          this.data.push(x);
        })
      })
    })
  }
  newspapercount: number = 0;
  A(): Observable<string> {
    return of('A');
  }
  B(): Observable<string> {
    return of('B');
  }
  // COOL LETS RUN IT
  helloFromnewspaperguy(): Observable<string> {
    // lets make this method as promise,,,,to see the real difference...
    return new Observable(observer => {// simple syntax change
      const timer_WHICH_WE_FORGOT = setInterval(() => {

        //in place of resolve, we will use next
        this.newspapercount = this.newspapercount + 1;
        if (this.newspapercount >= 10) // suppose I want to have 10 days newspaper only,,
        {

          observer.complete(); // lets complete this code
          observer.unsubscribe(); // lets unsubscribe it to, to save memory
          clearInterval(timer_WHICH_WE_FORGOT); // we are stopping timer too,,,,in real time its not needed..
          alert('I got all newspapers, please do not send now');
        }

        //lets run it
        observer.next('From helloFromnewspaperguy');
        //lets convert it to timer , to get newspaper fake call
      }, 1000);
    })

  }







  call3methodssimple() { // here we simply chain
    // method2 will wait till method 1 completes...
    //same method 3 will wait till method 2 completes...
    // lets run it,,,
    this.simplemethod1().then((value) => {
      this.simplemethod2().then((val) => {
        this.simplemethod3().then((v) => {
          alert('all done');
        })
      })
    })
  }
  simplemethod1(): Promise<string> { // as we need to return promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('I am done from 1 method after 10 seconds');
        resolve(''); // resolving blank,,,,else we do not need,,we push data in the above line
      }, 10000);
    });
  }
  simplemethod2(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('I am done from 2 method after 5 seconds');
        // we forrgot to resolve it,,
        resolve('');
      }, 5000);
    });
  }
  simplemethod3(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.data.push('I am done from 3 method after 1 seconds');
        resolve('');
      }, 1000);
    });
  }










  call3methods() {
    this.first().then((value) => {
      this.second().then((val) => {
        this.third().then((message) => {
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
    this.methodAA().subscribe((value: any) => { // get states
      this.data.push(value);
      this.methodBB().subscribe((val: any) => { // get cities
        this.data.push(val);
        this.methodCC().subscribe((v: any) => { // get villages
          this.data.push(v);
        });
      });
    });


    // loader show krna
    // jab tk,,, 3 api calls complete ni hojati




    // forkJoin({ a: this.methodAA(), b: this.methodBB(), c: this.methodCC() })
    //   .subscribe(({ a, b, c }) => {
    //     alert();
    //     this.data.push(a);
    //     this.data.push(b);
    //     this.data.push(c);
    //    });

    // combineLatest(this.methodAA(), this.methodBB(), this.methodCC())
    //   .subscribe(([a, b, c]) => {
    //     this.data.push(a);
    //     this.data.push(b);
    //     this.data.push(c);
    //   });

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
