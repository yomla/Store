import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
 
})
export class BuyersComponent implements OnInit {

  private buyers: any = [];

  constructor() {

  	this.buyers = [
 		{
 			id: 1,
			firstName: 'John',
 			lastName: 'Doe',
 			email: 'john@doe.com'
 		},
 		{
 			id: 2,
 			firstName: 'Sam',
 			lastName: 'Smith',
 			email: 'sam@doe.com'
 		},
 		{
 			id: 3,
 			firstName: 'George',
 			lastName: 'Sullivan',
 			email: 'george@doe.com'
 
 		},
 
 		{
 			id: 4,
 			firstName: 'John',
 			lastName: 'Deere',
 			email: 'john@doe.com'
 		}
 
 		];

   }

  ngOnInit() {
  }

}
