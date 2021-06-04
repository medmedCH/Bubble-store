import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../../services/categorie.service';
import {Categorie} from '../../../../Models/Categorie';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
cat:Categorie[];
  constructor(private categoryservice:CategorieService) { }

  ngOnInit() {
    this.getcats();
  }
getcats(){
  this.categoryservice.getcat().subscribe(data=>{
    this.cat=data
    console.log('categories:',this.cat)
  })
}
  deletecat(id:number) {
    if (confirm('êtes-vous sûr de vouloir supprimer ce produit ? ')) {

      this.categoryservice.deletecat(id).subscribe(data => {
        this.getcats();
      });
    }
  }
}
