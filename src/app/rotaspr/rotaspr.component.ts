import { RotasprService } from './rotaspr.service';
import { Component, OnInit } from '@angular/core';
import { Rotaspr } from '../model/rotaspr';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';


@Component({
  selector: 'app-rotaspr',
  templateUrl: './rotaspr.component.html',
  styleUrls: ['./rotaspr.component.css']
})
export class RotasprComponent implements OnInit {

  items = this.getItems();

  /*
  = [
    {id : 1, aplicacao : 'MASTERSFA', produto : 'MASTER SFA APL', canalenvio: '', soap : {}},
    {id : 2, aplicacao : 'MASTERCRM', produto : 'MASTERCRM', canalenvio: '' ,rest : {}},
  ];

  this.rotaspr.get('login', formData.login, formData.password).subscribe(() => {
    this.storage.set('isLoggedIn', 'true').then(() => {
      this.router.navigate(['/']);
    });
  }, () => {
    this.poNotification.error('Invalid username or password. Please try again.');
  });
*/
  columns : Array<PoTableColumn> = [
    { property: 'produto', label: 'Produto' },
    { property: 'aplicacao', label: 'Aplicacao' }
  ];

  actions: Array<PoTableAction> = [
    { action: this.details.bind(this), icon: 'po-icon-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon po-icon-delete', label: 'Remove' }
  ];

  constructor( private rotaspr : RotasprService,
    private poNotification: PoNotificationService)
  {
  }

  ngOnInit(): void {
  }
  getItems() {
    let it = this.rotaspr.get().subscribe(() => {
      console.log('erro');
    }, () => {
      this.poNotification.error('Invalid username or password. Please try again.');
    });

    return it;
  }
  onExpandDetail(){

  }
  onCollapseDetail(){

  }
  details(){
    console.log('Details');
  }
  remove(){

  }
  incluir(){

  }
}
