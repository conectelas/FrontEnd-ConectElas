import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
>>>>>>> dev

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('Sua sessão expirou!')
      this.router.navigate(['/login'])
    }

>>>>>>> dev
  }

}
