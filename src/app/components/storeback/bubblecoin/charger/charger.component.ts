import { Component, OnInit } from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent implements OnInit {
  users:KeycloakProfile[];
  constructor(private cartservice:CartService) {
  }

  ngOnInit() {
    this.cartservice.getallusers().subscribe(data=>{
      this.users=data
    })
  }

}
