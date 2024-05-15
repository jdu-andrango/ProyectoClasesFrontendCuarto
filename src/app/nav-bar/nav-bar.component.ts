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
              label: 'home',
              icon: 'pi pi-home',
              route:'/home'
              // items: [
              //     {
              //         label: 'home',
              //         route: '/home'
              //     },
              //     {
              //         label: 'contact',
              //         route: '/contact'
              //     }
              // ]
          },
          {
            label: 'Contactos',
            icon: 'pi pi-contactos',
            route: '/contact'
            // items: [
            //     {
            //         label: 'home',
            //         route: '/home'
            //     },
            //     {
            //         label: 'contact',
            //         route: '/contact'
            //     }
            // ]
        },
        {
          label: 'formulario Reactivo Usuarioss',
          icon: 'pi pi-form',
          route:'/formReact'
          // items: [
          //     {
          //         label: 'home',
          //         route: '/home'
          //     },
          //     {
          //         label: 'contact',
          //         route: '/contact'
          //     }
          // ]
      },
      {
        label: 'formulario',
        icon: 'pi pi-formulario',
        route:'/form'
        // items: [
        //     {
        //         label: 'home',
        //         route: '/home'
        //     },
        //     {
        //         label: 'contact',
        //         route: '/contact'
        //     }
        // ]
    },


      ];
  }
}
