import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatPaginator } from "@angular/material/paginator";
import { FlashMessagesService } from 'angular2-flash-messages';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: any = 'udaybhan';
  allData: any;
  @ViewChild(MatPaginator, { static: true })
  paginator:any = MatPaginator;
  images: any;
  constructor(private pServ: ProductService, private router: Router, private flashServ: FlashMessagesService) {

  }
  showTable: any  = false;
 model: any = {}
 category = [
  { name: 'Fw wheeler', value: 'fw' },
  { name: 'Tw wheeler', value: 'tw' },
  { name: 'Cfw wheeler', value: 'cfw' }
]
displayedColumns: string[] = ['imagePath', 'name', 'price', 'modal', 'category', 'action'];
dataSource:any;
onSubmit(form: NgForm) {
  if (form.invalid) {
    return;
  }
this.pServ.postProduct(this.model, this.images).subscribe(data=> {
  if(data) {
    this.flashServ.show('Save Success!', {cssClass: 'alert-danger', timeout: 3000})
  }
  this.getData();
})
}

imgonChange(event:any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.images = file;
  }
}
getData() {
  this.pServ.getProduct().subscribe(res=>{
    this.showTable = true;
    this.allData = res;
   this.dataSource =   this.dataSource = new MatTableDataSource(this.allData);
   this.dataSource.paginator = this.paginator;
  })
}
ngOnInit() {
  this.getData();
this.model.category = '';

}

}
