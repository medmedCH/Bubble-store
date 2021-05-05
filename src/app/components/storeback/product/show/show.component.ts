import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../Models/Product';
import {Categorie} from '../../../../Models/Categorie';
import {CategorieService} from '../../../../services/categorie.service';

@Component({
  selector: 'app-show',
  templateUrl: './updateprd.html',
  styleUrls: ['./show.component.css']

})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() prd;

  constructor(public activeModal: NgbActiveModal) {
  }

  /*OffreForm = new FormGroup({
    ds: new FormControl('', [Validators.required]),
    nameInput: new FormControl('', [Validators.required]),
    tr: new FormControl('', [Validators.required]),
    oft: new FormControl('', [Validators.required]),
    av: new FormControl('', [Validators.required]),
  });*/


  /*get nameInput() {
    return this.OffreForm.get('nameInput');
  }

  get ds() {
    return this.OffreForm.get('ds');
  }

  get oft() {
    return this.OffreForm.get('oft');
  }

  get av() {
    return this.OffreForm.get('av');
  }

  get tr() {
    return this.OffreForm.get('tr');
  }*/


 /* updateOff(id: number) {
    const obj: Offre = this.prd;
    obj.name = this.OffreForm.value.nameInput === '' ? this.off.name : this.OffreForm.value.nameInput;
    obj.description = this.OffreForm.value.ds === '' ? obj.description : this.OffreForm.value.ds;
    obj.offtype = this.OffreForm.value.oft === '' ? obj.offtype : this.OffreForm.value.oft;
    obj.avantages = this.OffreForm.value.av === '' ? obj.avantages : this.OffreForm.value.av;
    obj.tarification = this.OffreForm.value.tr === '' ? obj.tarification : this.OffreForm.value.tr;

    this.offreService.modifier(obj).subscribe(data => data);
    this.activeModal.close('Close click');
    window.location.reload();
  }*/
}







@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  prod:Product[]=[];
  prd:Product;
  cat: Categorie[] = [];

  constructor(private productservice:ProductService, private categorieservice:CategorieService,private modalService: NgbModal) { }

  ngOnInit() {
    this.productservice.getproducts().subscribe(data => {
      this.prod = data;
    });
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
    });
  }

  open(id: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    this.productservice.getproductbyid(id).subscribe(data => {
     console.log('produit à modifier= ')
      console.log(data)
     modalRef.componentInstance.prd = data;
    });
  }

  deleteprdd(id: number) {
    if(confirm('êtes-vous sûr de vouloir supprimer ce produit ? ')) {
      this.productservice.deleteprd(id).subscribe(data2=>'ok');
      window.location.reload();
    }
  }
}
