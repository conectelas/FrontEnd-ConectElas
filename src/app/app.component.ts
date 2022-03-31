import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
