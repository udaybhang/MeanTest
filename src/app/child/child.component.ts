import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() template!: TemplateRef<any>
  constructor() { }

  ngOnInit(): void {
  }

}
