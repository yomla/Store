import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../shared/services/buyers.service';
import { Buyer } from './buyer';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
 
})
export class BuyersComponent implements OnInit {

   allBuyers: any[] = [];
   newBuyer: Buyer = new Buyer('','','','');

  constructor(private bayers: BuyersService) {
 
 }

 ngOnInit() {

  	this.allBuyers = this.bayers.getBuyers();
  }

 remove(buyer) {
	const index = this.allBuyers.indexOf(buyer);
	this.allBuyers.splice(index,1);
 }

 addBuyer() {
 	this.bayers.addBuyers(this.newBuyer);
 	this.newBuyer = new Buyer('','','','');
 }

}
