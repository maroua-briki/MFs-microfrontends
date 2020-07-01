import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'navbar-mf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers

})
export class NavbarComponent implements OnInit {
/*=====================manage assets with single spa======================================*/
logoUrl = assetUrl("logo.svg");
logoMiniUrl = assetUrl("logo-mini.svg");
face1Url=assetUrl("face1.jpg");
face4Url=assetUrl("face4.jpg");
face2Url=assetUrl("face2.jpg");
face3Url=assetUrl("face3.jpg");
/*========================================================================================*/
public iconOnlyToggled = false;
public sidebarToggled = false;

public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;

  constructor(config: NgbDropdownConfig) {
 config.placement = 'bottom-right';
}
// constructor(){

// }

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


///toggle sidebar in small devices
toggleOffcanvas() {
 document.querySelector('.sidebar-offcanvas').classList.toggle('active');
}

// toggle sidebar
// toggleSidebar() {
//  let body = document.querySelector('body');
//  if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
//    this.iconOnlyToggled = !this.iconOnlyToggled;
//    if(this.iconOnlyToggled) {
//      body.classList.add('sidebar-icon-only');
//    } else {
//      body.classList.remove('sidebar-icon-only');
//    }
//  } else {
//    this.sidebarToggled = !this.sidebarToggled;
//    if(this.sidebarToggled) {
//      body.classList.add('sidebar-hidden');
//    } else {
//      body.classList.remove('sidebar-hidden');
//    }
//  }
// }

// toggle right sidebar
// toggleRightSidebar() {
//  document.querySelector('#right-sidebar').classList.toggle('open');
// }

//logout
logout(){
 
}

}
