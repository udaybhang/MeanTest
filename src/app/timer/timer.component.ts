import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
@Input() countDownDate:any
public remainingTime = "";
  constructor() { }

  ngOnInit(): void {
    this.countdown()
  }
  countdown() {
    const self = this;

    const x = setInterval(() => {

      // Get today's date and time
      const now = new Date().getTime();
        
      // Find the distance between now and the count down date
      const distance = self.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      self.remainingTime = days + 'd ' + hours + 'h '
      + minutes + 'm ' + seconds + 's ';
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        this.remainingTime = 'EXPIRED';
      }
    }, 1000);
  }
}
