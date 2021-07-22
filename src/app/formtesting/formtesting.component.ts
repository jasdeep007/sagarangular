import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApicallsserviceService } from '../apicalls/apicallsservice.service';

@Component({
  selector: 'app-formtesting',
  templateUrl: './formtesting.component.html',
  styleUrls: ['./formtesting.component.css']
})
export class FormtestingComponent implements OnInit {

  finalform: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(10)])
    }
  );
  constructor(private apiservice: ApicallsserviceService) { }

  data: any; 
  ngOnInit(): void {
    this.apiservice.getdata().subscribe((result: any[]) => {
      this.data = result;
      this.finalform = new FormGroup(
        {
          name: new FormControl(this.data[0].name, [Validators.required]),
          age: new FormControl(this.data[0].id, [Validators.required, Validators.min(10)])
        }
      );
    });
  }
  submitform() {
    // call to api
    if (this.finalform.valid)
      this.apiservice.postdata(this.finalform.value).subscribe((data: any) => {
        console.log('request completed');
      });
    else {
      this.finalform.markAllAsTouched();
      this.finalform.markAsDirty();
      this.finalform.updateValueAndValidity();
    }
  }
  reset() {
    this.finalform = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        age: new FormControl(0, [Validators.required, Validators.min(10)])
      }
    );
  }
}
