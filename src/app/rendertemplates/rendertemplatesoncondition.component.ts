import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rendertemplatesoncondition',
  templateUrl: './rendertemplatesoncondition.component.html',
  styleUrls: ['./rendertemplatesoncondition.component.css']
})
export class RendertemplatesonconditionComponent implements OnInit {
  // userData = {name:'john', email:'uexefm@gmail.com'}
  userData:any = [{name:'john', email:'uexefm@gmail.com'}, {name:'udaybhan', email:'udaybhan@gmail.com'}, {name:'raju', email:'raju@gmail.com'}, {name:'sohan', email:'sohan@gmail.com'}]
  // @ViewChild('cardShop', { static: true })
  // cardShop!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }
data:any = [{
  title:"Bag",
  color:"blue",
  amount:"500",
  type:"shop"
}]

get SelectedData() {
  return this.data[0];
}

// getSelectedComponentTemplate(type:any) {
//   switch(type) {
//     case 'shop':
//       return this.cardShop;
//       default :
//       return;
//   }
// }
}
