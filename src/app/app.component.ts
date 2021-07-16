import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  itens = [
    {Cod: '00001', data: '17/07/2020', Seguro:'Sul-America Seguros', Aprovado: 'Sim', Codigo: '00001', Nome: 'Alessandro', Age: '44'},
    {Cod: '00002', data: '18/07/2020', Seguro:'Alians', Aprovado: 'Sim', Codigo: '00002', Nome: 'Samuel', Age: '50'}
  ]
  readonly menus: Array<PoMenuItem> = [
    { label: 'Inicio', action: this.onClick.bind(this), icon: 'po-icon-home', shortLabel: 'Configuration' },
    { label: 'Tenant', action: this.onClick.bind(this), icon: 'po-icon po-icon-change', shortLabel: 'Tenant' },
    { label: 'Configuration', action: this.onClick.bind(this), icon: 'po-icon-device-desktop', shortLabel: 'Configuration' },
    { label: 'Maintenance', action: this.onClick.bind(this), icon: 'po-icon po-icon-document', shortLabel: 'Maintenance' },
    { label: 'Logs', action: this.onClick.bind(this), icon: 'po-icon-exclamation', shortLabel: 'Logs de transation' },
    { label: 'Generic', action: this.onClick.bind(this), icon: 'po-icon-search', shortLabel: 'Generic query' },
    { label: 'Swagger', action: this.onClick.bind(this), icon: 'po-icon po-icon-light', shortLabel: 'Sweger' }
  ];

  private onClick() {
    alert('item')
  }
  onClickButton(){

  }

}
