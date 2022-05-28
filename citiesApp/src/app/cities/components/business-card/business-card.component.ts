import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.sass']
})
export class BusinessCardComponent implements OnInit {

  @Input() business: any;

  constructor() { }

  ngOnInit(): void {
  }

}
