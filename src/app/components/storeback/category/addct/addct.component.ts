import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../../services/categorie.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addct',
  templateUrl: './addct.component.html',
  styleUrls: ['./addct.component.css']
})
export class AddctComponent  {
  submitted = false;

  constructor(private categorieservice: CategorieService , private router: Router) { }
  productForm = new FormGroup({
    titreinput: new FormControl('', [Validators.required]),
    descriptionInput: new FormControl('', [Validators.required]),
  });

  get titreinput() {
    return this.productForm.get('titreinput');
  }
  get descriptionInput() {
    return this.productForm.get('descriptionInput');
  }



  onReset() {
    this.submitted = false;
    this.productForm.reset();
  }
  addcat() {

        const category = {

          name: this.titreinput.value,
          description: this.descriptionInput.value,
        };

        console.log(category)
        console.log()

        if(this.productForm.valid) {
          this.categorieservice.addcat(category).subscribe(data=>'Bien');
          this.router.navigateByUrl('/storeback/strbackkk/cat/showcat');
        }else return this.router.navigateByUrl('storeback/strback/addcat');

  }

}
