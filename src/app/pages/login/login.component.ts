import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    /* background squares */
    const ulSquare: any = document.querySelector("section.squares");

    for (let i = 0; i < 11; i++) {
      const li = document.createElement("li");

      const random = (min: number, max: number) => Math.random() * (max - min) + min;
      const size = Math.floor(random(10, 120));
      const position = random(1, 99);
      const delay = random(5, 0.1);
      const duration = random(24, 12);

      li.style.width = `${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom = `-${size}px`;

      li.style.left = `${position}%`;

      li.style.animationDelay = `${delay}s`;
      li.style.animationDuration = `${duration}s`;
      li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

      ulSquare.appendChild(li);
    }


  }


}
