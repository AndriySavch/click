import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public zero = 0;
  public changeZero = () =>{
    this.zero++;
  };
  public restart= () =>{
    this.zero = 0;
  }

  }

