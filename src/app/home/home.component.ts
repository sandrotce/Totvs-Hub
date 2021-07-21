import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoStorageService } from '@po-ui/ng-storage';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  title = 'TOTVS H U B';

  readonly menus: Array<PoMenuItem> = [
    { label: 'Inicio', action: this.onClick.bind(this), icon: 'po-icon-home', shortLabel: 'Configuration' },
    { label: 'Configuracao Erp', action: this.onClick.bind(this), icon: 'po-icon-device-desktop', shortLabel: 'Configuration' },
    { label: 'Maintenance', action: this.onClick.bind(this), icon: 'po-icon po-icon-document', shortLabel: 'Maintenance' },
    { label: 'Logs', action: this.onClick.bind(this), icon: 'po-icon-exclamation', shortLabel: 'Logs de transation' },
    { label: 'Generic', action: this.onClick.bind(this), icon: 'po-icon-search', shortLabel: 'Generic query' },
    { label: 'Logout', icon: 'exit', action: this.logout.bind(this) }
  ];

  constructor(private router: Router, private storage: PoStorageService) { }

  logout(): void {
    this.storage.remove('isLoggedIn').then(() => {
      this.router.navigate(['/login']);
    });
  }


  ngOnInit(): void {
  }

  private onClick() {
    alert('item')
  }


}
