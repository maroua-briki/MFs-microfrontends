import { Component } from '@angular/core';
import { RessourceService } from './ressource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ressource-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened=false;
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  toggleSidebar(){
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }
  constructor(private ressserv:RessourceService,private router : Router)
  {
    window.addEventListener('CustomerSelected', (e) => {
      this.toggleSidebar();

      console.log("recieve");
     })
    }
  ngOnInit():void{
    this.savetoken();
    
  }



  send() {
    // fetch new data and render it
    const customer = { id: 17};
    console.log("send");
    window.dispatchEvent(new CustomEvent('CustomerSelected', {detail: customer}))    
  
  }


  localstorage(){
    console.log(localStorage.getItem('token'))
  localStorage.getItem('token');
  
  }
savetoken()
{
  this.ressserv.saveToken();
}
}