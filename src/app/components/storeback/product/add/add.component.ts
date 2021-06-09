import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategorieService} from '../../../../services/categorie.service';
import {Categorie} from '../../../../Models/Categorie';
import {ProductService} from '../../../../services/product.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {Product} from '../../../../Models/Product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cat: Categorie[] = [];
  submitted = false;
  file: any ;
  filee:string;
  myfiles:string[]=[];
  img:any;
  prod:Product;
  constructor(private afStorage: AngularFireStorage ,private categorieservice: CategorieService,private productservice:ProductService , private router: Router) { }


  productForm = new FormGroup({
    titreinput: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    descriptionInput: new FormControl('', [Validators.required]),
    catego: new FormControl('', [Validators.required]),
    priceInput: new FormControl('', [Validators.required]),
    devise:new FormControl('', [Validators.required]),
    images:new FormControl('', [Validators.required]),
    bubblecoin:new FormControl('', [Validators.required])
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
  get devise() {
    return this.productForm.get('devise');
  }
  get images() {
    return this.productForm.get('images');
  }
  get bubblecoin() {
    return this.productForm.get('bubblecoin');
  }

  upload($event: any) :void {
    this.file = $event.target.files[0];
    console.log('qq',this.file);

    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.img = reader.result;

    };

  }
  upload1(event)  {
   for (let i=0;i<3;i++){
    this.filee=event.target.files[i];
    this.myfiles.push(event.target.files[i]);
    this.productForm.get('images').setValue(this.myfiles);
   }
     console.log(this.myfiles);
    }

  addproduct() {
    const randomId = Math.random().toString(36).substring(2);
    const randomId1= Math.random().toString(36).substring(2);
    const randomId2= Math.random().toString(36).substring(2);
    const randomId3= Math.random().toString(36).substring(2);

    const ref = this.afStorage.ref(randomId);
    const ref1= this.afStorage.ref(randomId1);
    const ref2= this.afStorage.ref(randomId2);
    const ref3= this.afStorage.ref(randomId3);
    const task = ref.put(this.file);
    const task1 = ref1.put(this.myfiles[0])
    const task2 = ref2.put(this.myfiles[1])
    const task3 = ref3.put(this.myfiles[2])
    task1.then(b=>{
      b.ref.getDownloadURL().then(value1=>{
        console.log('images1:',value1);
        this.myfiles[0]=value1;
    task2.then(c=>{
          c.ref.getDownloadURL().then(value2=>{
            console.log('images1:',value2);
            this.myfiles[1]=value2;
    task3.then(d=>{
              d.ref.getDownloadURL().then(value3=>{
                console.log('images1:',value3);
                this.myfiles[2]=value3;
    task.then(a => {
      a.ref.getDownloadURL().then(value => {
        console.log(value);
        this.img = value;
        const product = {

          title: this.titreinput.value,
          description: this.descriptionInput.value,
          quantity:this.quantity.value,
          category:this.catego.value,
          price: this.priceInput.value,
          bubblecoin:this.bubblecoin.value,
          imgpr:value,
          images1:value1,
          images2:value2,
          images3:value3,
          devise:this.devise.value,
        };

        console.log(product)
        console.log('category',this.catego.value)

        if(this.productForm.valid) {
          this.productservice.addproduct(product).subscribe(data=>'Bien');
          this.router.navigateByUrl('storeback/strbackkk/product/show');
        }/*else
          this.myfiles=null;
          this.img=null;
          alert('Form invalid ');*/
      });
    })});
    })});
    })});
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
    this.myfiles=null;
    this.img=null;
  }
}
