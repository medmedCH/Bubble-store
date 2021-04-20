import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../../Models/Categorie';
import {CategorieService} from '../../../services/categorie.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements OnInit {
  cat: Categorie[] = [];

  constructor(private categorieservice: CategorieService) {
}
ngOnInit() {
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
      console.log('aaaa=');
      console.log(data);
    });
  }
}
