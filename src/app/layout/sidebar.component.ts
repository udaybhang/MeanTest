import { Component, ElementRef, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }
  public ngAfterViewInit() {
//     $('li').click(() => {
//       $(this).addClass('active').siblings().removeClass('active');
// });
var el = document.querySelectorAll('.controllers');
for (let i = 0; i < el.length; i++) {
  el[i].addEventListener('click',  ()=> {
    var c = 0;
    while (c < el.length) {
      el[c++].className = 'slide';
    }
    el[i].className = 'slide active';
  });
}
  }

}
