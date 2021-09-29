import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
expireTime:any = new Date(1648555889).getTime() * 1000;
  constructor() { }

  ngOnInit(): void {
  }

}
