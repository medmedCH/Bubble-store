import {Component, OnInit} from '@angular/core';
declare const mytest: any;
declare const aaaaa: any;

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    mytest();
    aaaaa();
  }



}
