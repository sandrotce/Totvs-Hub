import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from '../generic/service/generic.service';
import { Rotaspr } from './../model/rotaspr';

@Injectable()
export class RotasprService extends GenericService<Rotaspr> {

  path = 'rotaspr';

  constructor(http: HttpClient) {
    super(http);
  }

}
