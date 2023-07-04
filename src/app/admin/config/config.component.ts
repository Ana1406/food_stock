import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  tabsOptions = [
    {
      title: 'Permisos',
      icon: 'gpp_maybe',
      route: 'permissions',
    },
    {
      title: 'Usuarios',
      icon: 'face',
      route: 'users',
    },
  ];
}
