import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../Models/Categorie';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private http: HttpClient) {
  }
  addcat(cat){
    return this.http.post<Categorie>('/api/categories',cat);
  }

   getcat()  {
    return   this.http.get<Categorie[]>('/api/categories');
  }


}
