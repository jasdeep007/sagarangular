import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
  //  alert(this.route.snapshot.params['id']);
  }

}
