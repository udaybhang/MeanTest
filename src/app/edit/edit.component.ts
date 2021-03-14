import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  model: any = {}
  productId:any;
  category = [
    { name: 'Fw wheeler', value: 'fw' },
    { name: 'Tw wheeler', value: 'tw' },
    { name: 'Cfw wheeler', value: 'cfw' }
  ]
  images: any;
  imgUrl: any = '';
  selectedFile: boolean = false;
  constructor(private pServ: ProductService, private flashServ: FlashMessagesService, private route: ActivatedRoute, private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
  this.pServ.updateProduct(this.model, this.images).subscribe(data=> {
    if(data) {
      this.flashServ.show('Update Success!', {cssClass: 'alert-danger', timeout: 3000})
    }
    this.router.navigate(['/product'])
  })
  }

  imgonChange(event:any) {
    this.selectedFile = true;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
        this.imgUrl = event.target.result; // base64 path
     };
     reader.readAsDataURL(this.images);
  }
  
  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("Id")) {
        this.productId = paramMap.get("Id");
        this.pServ.getSingleProduct(this.productId).subscribe(productList => {
         
          console.log('productList', productList)
          if(productList !== null) {
            this.model.name = productList.name;
            this.model.modal = productList.modal;
            this.model.price =  productList.price;
            this.model.category =  productList.category;
            this.model._id = productList._id;
          }
              });
      } 
    });
  }

}
