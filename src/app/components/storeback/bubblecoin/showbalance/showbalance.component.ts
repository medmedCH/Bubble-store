import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../../services/cart.service';
import {BcoinService} from '../../../../services/bcoin.service';
import {KeycloakProfile} from 'keycloak-js';
import {SoldesBCoin} from '../../../../Models/SoldesBCoin';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrls: ['./showbalance.component.css']
})
export class ShowbalanceComponent implements OnInit {
  users:KeycloakProfile[];
  solde:SoldesBCoin;
  soldes:SoldesBCoin[]=[];
  constructor(private cartservice:CartService,private bcoinservice:BcoinService) { }

  async ngOnInit() {
 await  this.getuserssoldes();
  }

  getuserssoldes(){
    this.cartservice.getallusers().subscribe(async data => {
      this.users = data
      for (let j = 0; j < this.users.length; j++) {
        this.solde = await this.bcoinservice.getsolde(this.users[j].id).toPromise();
        await this.soldes.push(this.solde);
      }
    });
  }



}
