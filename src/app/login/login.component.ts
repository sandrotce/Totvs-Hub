import { Component, OnInit, Input } from '@angular/core';

import { PoLoginComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @Input() namelogin: string;
 @Input() urls:string = 'wqww.xxx';
  constructor() {
    this.namelogin = "TOTVS HUB"
  }
  onClickButton(){

  }
  ngOnInit(): void {
  }

}
