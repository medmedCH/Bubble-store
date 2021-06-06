import { Component, OnInit } from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {CartService} from '../../../../services/cart.service';
import {BcoinService} from '../../../../services/bcoin.service';
import {SoldesBCoin} from '../../../../Models/SoldesBCoin';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent implements OnInit {
  users:KeycloakProfile[];
  solde:SoldesBCoin;
  soldes:SoldesBCoin[]=[];
  constructor(private cartservice:CartService,private bcoinservice:BcoinService, private router: Router) {
  }
  balanveForm = new FormGroup({
    balance: new FormControl('', Validators.pattern('^[0-9]*$')),
  });
  get balance() {
    return this.balanveForm.get('balance');
  }
   ngOnInit() {
   this.loadchargebc();
  }

   async loadaccount(id: number){
     if(this.balanveForm.valid) {
       this.bcoinservice.loadaccount(id, this.balanveForm.value.balance).subscribe(data => 'okok');
       this.router.navigateByUrl('storeback/strbackkk/coin/showsoldes');
     }
  }
 async unloadaccount(id: number){
    if(this.balanveForm.valid) {
      console.log(this.balanveForm.value.balance);
      this.bcoinservice.unloadaccount(id, this.balanveForm.value.balance).subscribe(data => 'okok');
      this.router.navigateByUrl('storeback/strbackkk/coin/showsoldes');

    }
  }
 async loadchargebc(){
    this.cartservice.getallusers().subscribe(async data => {
      this.users = data
      for (let j = 0; j < this.users.length; j++) {
        console.log(this.users[j].id)
        this.solde = await this.bcoinservice.getsolde(this.users[j].id).toPromise();
        await this.soldes.push(this.solde);
      }
    });
  }

}
