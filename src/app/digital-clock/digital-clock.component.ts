import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  time = new Date(); 
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.time = new Date();
    },1000);
  }


}
