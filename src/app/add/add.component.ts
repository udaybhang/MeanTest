import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: any = 'udaybhan';
  allData: any;
  constructor(private pServ: ProductService, private router: Router, private flashServ: FlashMessagesService) {

  }
  showTable: any  = false;
 model: any = {}
 category = [
  { name: 'Fw wheeler', value: 'fw' },
  { name: 'Tw wheeler', value: 'tw' },
  { name: 'Cfw wheeler', value: 'cfw' }
]
displayedColumns: string[] = ['name', 'price', 'modal', 'category', 'action'];
dataSource:any;
onSubmit(form: NgForm) {
  if (form.invalid) {
    return;
  }
this.pServ.postProduct(this.model).subscribe(data=> {
  console.log('save data   ==', data)
  if(data) {
    this.flashServ.show('Save Success!', {cssClass: 'alert-danger', timeout: 3000})
  }
  this.getData();
})
}


getData() {
  this.pServ.getProduct().subscribe(res=>{
    this.showTable = true;
    this.allData = res;
   this.dataSource = this.allData;
  })
}
ngOnInit() {
  this.getData();
this.model.category = '';

}

}
