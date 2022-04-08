import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('links') links: any;

  linkClicado = ''

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const li = this.links.nativeElement.children;
    [...li].forEach(link => {
      link.children[1].addEventListener('click', (e:any)=>{
        this.linkClicado = e.textContent
        console.log(e.textContent)
      })
    })
  }


}
