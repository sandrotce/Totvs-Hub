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
    { label: 'Inicio', link: './home', icon: 'po-icon-home', shortLabel: 'Configuration' },
    { label: 'Configuracao Erp', link: './home', icon: 'po-icon-device-desktop', shortLabel: 'Configuration' ,
      subItems : [
      {label: 'Cadastro de Rotas', link: './rotaspr', icon: 'po-icon-device-desktop', shortLabel: 'Rotas'},
      {label: 'De/para Empresas', link: './home', icon: 'po-icon-device-desktop', shortLabel: 'Rotas'},
      {label: 'Cadastro de Adapter', link: './home', icon: 'po-icon-device-desktop', shortLabel: 'Rotas'},
      {label: 'Sincronizador do EAI', link: './home', icon: 'po-icon-device-desktop', shortLabel: 'Rotas'}
    ]},
    { label: 'Configuração Hub', link: './home', icon: 'po-icon po-icon-document', shortLabel: 'Maintenance' },
    { label: 'Logs', link: './home', icon: 'po-icon-exclamation', shortLabel: 'Logs de transation' },
    { label: 'Consulta Generica', link: './home', icon: 'po-icon-search', shortLabel: 'Generic query' },
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


}
