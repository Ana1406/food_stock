import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent {
  toggleTabBtnPermission = false;
  toggleTabBtnUsers = false;

  tabsOptions = [
    {
      title: 'Permisos',
      icon: 'gpp_maybe',
      route: 'permissions',
      // value: false,
      // function: this.clickPermission,
    },
    {
      title: 'Usuarios',
      icon: 'face',
      route: 'users',
      // value: false,
      // function: this.clickUsers,
    },
  ];

  clickPermission() {
    this.toggleTabBtnPermission = true;
    this.toggleTabBtnUsers = false;
    console.log('oli');
  }

  clickUsers() {
    this.toggleTabBtnPermission = false;
    this.toggleTabBtnUsers = true;
    console.log('oli2');
  }
}
