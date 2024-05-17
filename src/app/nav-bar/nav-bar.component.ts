import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
// import { CartService } from '../cart.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;


  constructor(private router: Router) {

  }

  ngOnInit():void {





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
            icon: 'pi pi-address-book',

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
          icon: 'pi pi-clipboard',
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
        icon: 'pi pi-clipboard',
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
      {
        label: 'Lista de productos',
        icon:' pi pi-prime ',
        route:'/product'
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
      label: 'carrito',
      icon: 'pi pi-cart-minus',
      route:'/store'
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
