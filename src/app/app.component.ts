import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService){
    
  }

  resolution: number = window.innerWidth;

  title = 'ConectElas';

  ngOnInit() {
    // 320px - 900px -> menu mobile
    // 900px+ -> menu desktop
    window.addEventListener('resize', () => {
      this.resolution = window.innerWidth;
    });
  }
}
