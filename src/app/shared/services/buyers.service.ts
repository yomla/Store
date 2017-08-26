import { Injectable } from '@angular/core';
import { Buyer } from '../../components/buyers/buyer';

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

  public addBuyers(newBuyer) {
  	this.buyers.push(newBuyer);
  }

  public getBuyer(id){
    return this.buyers.find((buyer) => {
      return buyer['id'] == id;
    })
  }

}

