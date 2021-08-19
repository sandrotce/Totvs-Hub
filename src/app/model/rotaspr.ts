import { rotaspr_rest } from './rotaspr_rest';
import { rotaspr_soap } from './rotaspr_soap';

export class Rotaspr {
  /**
   * rotas id.
   */
  id?: number;
  /**
   * Rotas produto.
   */
  produto: string;
  /**
   * Rotas aplicacao.
   */
  aplicacao: string;
  /**
   * Rotas canalenvio.
   */
  canalenvio: string;
  /**
   * Rotas soap.
   */
  soap?: rotaspr_soap;
  /**
   * Rotas rest
   */
  rest?: rotaspr_rest;

  constructor() { }
}
