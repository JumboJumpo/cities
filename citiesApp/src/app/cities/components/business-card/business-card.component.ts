import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Business } from '../../models/business';


@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.sass']
})
export class BusinessCardComponent implements OnInit, OnChanges {

  @Input() business: Business;
  imageStyle = {'max-height': '200px', 'overflow': 'hidden', 'object-fit': 'cover'}
  subtitle: string;

  constructor() { }

  ngOnInit(): void {
    this.subtitle = `Address: ${this.business.location.address1}, ${this.business.location.zip_code} \n  Price: ${this.business.price} \n Phone: ${this.business.phone}`;
  }

  ngOnChanges(): void {
    
  }

}
