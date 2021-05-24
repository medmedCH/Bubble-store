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
export class NgbdModalContent implements OnInit{
  @Input() prd:Product;
  cat: Categorie[] = [];
  file: any ;
  img:any;

  constructor(public activeModal: NgbActiveModal , private categorieservice:CategorieService , private productservice:ProductService) {
  }
  productform = new FormGroup({

    titre: new FormControl('', [Validators.required]),
    ds: new FormControl('', [Validators.required]),
    pr: new FormControl('', [Validators.required]),
    catt: new FormControl('', [Validators.required]),
    qte: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
    });
  }

  get titre() {
    return this.productform.get('titre');
  }

  get ds() {
    return this.productform.get('ds');
  }
  get pr() {
    return this.productform.get('pr');
  }
  get catt() {
    return this.productform.get('catt');
  }

  get qte() {
    return this.productform.get('qte');
  }

  upload($event: any) :void {
    this.file = $event.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.img = reader.result;

    };

  }



  updateprd(id: number) {
    const obj: Product = this.prd;
    obj.title = this.productform.value.titre === '' ? this.prd.title : this.productform.value.titre;
    obj.description = this.productform.value.ds === '' ? this.prd.description : this.productform.value.ds;
    obj.price = this.productform.value.pr === '' ? this.prd.price : this.productform.value.pr;
    obj.categoryId = this.productform.value.catt === '' ? this.prd.categoryId : this.productform.value.catt;
    obj.quantity = this.productform.value.qte === '' ? this.prd.quantity : this.productform.value.qte;
   // obj.imgpr = this.productform.value.tr === '' ? obj.tarification : this.productform.value.tr;

    this.productservice.updateprd(id,obj).subscribe(data => data);
    this.activeModal.close('Close click');
    window.location.reload();
  }
}







@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  prod:Product[]=[];
  prd:Product;

  constructor(private productservice:ProductService,private modalService: NgbModal) { }

  ngOnInit() {
    this.productservice.getproducts().subscribe(data => {
      this.prod = data;
    });

  }

  open(id: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    this.productservice.getproductbyid(id).subscribe(data => {
      this.prd=data;
     console.log('produit à modifier= ')
      console.log(this.prd)
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
