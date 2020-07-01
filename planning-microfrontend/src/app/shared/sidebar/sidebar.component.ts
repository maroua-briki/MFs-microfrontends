import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { Router } from '@angular/router';

@Component({
  selector: 'planning-microfrontend-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
  /*=====================manage assets with single spa======================================*/
  face1Url = assetUrl("face1.jpg");
  /*========================================================================================*/
public uiBasicCollapsed = false;
public samplePagesCollapsed = false;

goToPhases(){

  this.router.navigate([''])
}

constructor(private router: Router,
  ) { }

ngOnInit() {
 const body = document.querySelector('body');

 // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
 document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
   el.addEventListener('mouseover', function() {
     if(body.classList.contains('sidebar-icon-only')) {
       el.classList.add('hover-open');
     }
   });
   el.addEventListener('mouseout', function() {
     if(body.classList.contains('sidebar-icon-only')) {
       el.classList.remove('hover-open');
     }
   });
 });
}
}
