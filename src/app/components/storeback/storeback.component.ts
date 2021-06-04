import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {KeycloakProfile} from 'keycloak-js';

@Component({
  selector: 'app-storeback',
  templateUrl: './storeback.component.html',
  styleUrls: ['./storeback.component.css']
})
export class StorebackComponent implements OnInit{
users:KeycloakProfile[];
  constructor(private cartservice:CartService) {
  }

  ngOnInit() {
    this.cartservice.getallusers().subscribe(data=>{
      this.users=data
    })
  }
}
