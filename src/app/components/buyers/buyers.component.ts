import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../shared/services/buyers.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
 
})
export class BuyersComponent implements OnInit {

  private allBuyers: any[] = [];

  constructor(private bayers: BuyersService) {
 
 }

 ngOnInit() {

  	this.allBuyers = this.bayers.getBuyers();
  }

 remove(buyer) {
	const index = this.allBuyers.indexOf(buyer);
	this.allBuyers.splice(index,1);
 }

}
