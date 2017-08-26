import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../../shared/services/buyers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
})
export class BuyerDetailsComponent implements OnInit {

  private buyer: any = {};

  constructor(private route: ActivatedRoute,
              private buyers: BuyersService) { }

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.buyer = this.buyers.getBuyer(id);
  }

}
