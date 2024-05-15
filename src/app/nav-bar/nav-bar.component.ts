import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'selecciona',
              icon: 'pi pi-home',
              items: [
                  {
                      label: 'home',
                      route: '/home'
                  },
                  {
                      label: 'contact',
                      route: '/contact'
                  }
              ]
          },
          {
              label: 'contacto',
              icon: 'pi pi-link',
              command: () => {
                  this.router.navigate(['/contact']);
              }
          },
          {
              label: 'link Externos',
              icon: 'pi pi-home',
              items: [
                  {
                      label: 'Angular',
                      url: 'https://angular.io/'
                  },
                  {
                      label: 'Vite.js',
                      url: 'https://vitejs.dev/'
                  }
              ]
          },
          
      ];
  }
}
