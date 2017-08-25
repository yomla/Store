import { Injectable } from '@angular/core';

@Injectable()
export class BuyersService {

	private buyers = 

	[
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

  constructor() {}

  public getBuyers() {
  	
  	return this.buyers; 

  }



}

