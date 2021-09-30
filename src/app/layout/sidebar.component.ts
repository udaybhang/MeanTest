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
    // var div = this.elRef.nativeElement.querySelector('.hamburger');
    // console.log(div)
    // div.addEventListener('click',()=>{
    //   document.querySelector('.body')?.classList.toggle("hamburger");
    // });
  }

}
