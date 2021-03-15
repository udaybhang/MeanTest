import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getLive = new Subject<any>();
  constructor(private http: HttpClient
    
    ) { }

 
  getProduct() {
    return this.http.get<any>('http://localhost:3000/api/product/getProduct'); 
  }
  postProduct(model:any, img:any) {
    const formData = new FormData();
    formData.append('file', img);
    formData.append('name', model.name);
    formData.append('modal', model.modal);
    formData.append('price', model.price);
    formData.append('category', model.category);
    // formData.forEach(item=>{
    //   console.log('item===', item)
    // })
    return this.http.post<any>('http://localhost:3000/api/product/createProduct', formData);
  }
getSingleProduct(id: any) {
    return this.http.get<any>(`http://localhost:3000/api/product/getSingleProduct/${id}`); 
  }

  updateProduct(model:any, img:any) {
    const formData = new FormData();
    formData.append('file', img);
    formData.append('name', model.name);
    formData.append('modal', model.modal);
    formData.append('price', model.price);
    formData.append('_id', model._id);
    formData.append('category', model.category);
    // console.log('formData=====', formData.forEach(item=> console.log(item)))
    return this.http.put<any>("http://localhost:3000/api/product/updateProduct", formData);
  }

}
