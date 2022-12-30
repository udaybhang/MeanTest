import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-outlet-ref',
  templateUrl: './outlet-ref.component.html',
  styleUrls: ['./outlet-ref.component.css']
})
export class OutletRefComponent implements OnInit {
list:any;
  constructor() { }
@Output() onRowClick = new EventEmitter<any>();
@ContentChild("leftMostHeaderRef") leftMostHeaderRef?: TemplateRef<any>;
@ContentChild("rightMostHeaderRef") rightMostHeaderRef?: TemplateRef<any>;
@ContentChild("leftMostColumnRef") leftMostColumnRef?: TemplateRef<any>;
@ContentChild("rightMostColumnRef") rightMostColumnRef?: TemplateRef<any>;
  ngOnInit(): void {
    this.list = [{firstName: 'uday', age:30}, {firstName: 'raja', age:25}]
  }
  rowClick(event: MouseEvent, firstName: any, index: any) {
    this.onRowClick.emit({ event, firstName, index: Number(index) });
  }
}
