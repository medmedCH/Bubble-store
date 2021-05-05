import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategorieService} from '../../../../services/categorie.service';
import {Categorie} from '../../../../Models/Categorie';
import {ProductService} from '../../../../services/product.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cat: Categorie[] = [];
  submitted = false;
  file: any ;
   img:any;


  constructor(private afStorage: AngularFireStorage ,private categorieservice: CategorieService,private productservice:ProductService , private router: Router) { }


  productForm = new FormGroup({
    titreinput: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    descriptionInput: new FormControl('', [Validators.required]),
    catego: new FormControl('', [Validators.required]),
    priceInput: new FormControl('', [Validators.required]),
  });
  get titreinput() {
    return this.productForm.get('titreinput');
  }
  get descriptionInput() {
    return this.productForm.get('descriptionInput');
  }
  get catego() {
    return this.productForm.get('catego');
  }
  get priceInput() {
    return this.productForm.get('priceInput');
  }
  get quantity() {
    return this.productForm.get('quantity');
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


  addproduct() {
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref(randomId);
    const task = ref.put(this.file);
    task.then(a => {
      a.ref.getDownloadURL().then(value => {
        console.log(value);
        this.img = value;
        const product = {

          title: this.titreinput.value,
          description: this.descriptionInput.value,
          quantity:this.quantity.value,
          categoryId:this.catego.value,
          price: this.priceInput.value,
          imgpr:value
        };

        console.log(product)
        console.log()

        if(this.productForm.valid) {
          this.productservice.addproduct(product).subscribe(data=>'Bien');
          this.router.navigateByUrl('/storeback/product/show');
        }else return this.router.navigateByUrl('storeback/product/add');
      });

    });



  }

  ngOnInit() {
    this.categorieservice.getcat().subscribe(data => {
      this.cat = data;
    });
  }

  onReset() {
    this.submitted = false;
    this.productForm.reset();
  }




}
