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
              label: 'Router',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Installation',
                      route: '/home'
                  },
                  {
                      label: 'Configuration',
                      route: '/contact'
                  }
              ]
          },
          {
              label: 'Programmatic',
              icon: 'pi pi-link',
              command: () => {
                  this.router.navigate(['/contact']);
              }
          },
          {
              label: 'External',
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
          {
            label: 'no funciona',
            icon: '/noFound',
            items: [
                {
                    label: 'no funciona',
                    route: '/noFound'
                },
                
            ]
        }
      ];
  }
}
