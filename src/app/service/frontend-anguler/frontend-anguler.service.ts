import { Injectable } from '@angular/core';
import { FrontendAngulerModel } from './frontend-anguler.model';

@Injectable({
  providedIn: 'root'
})
export class FrontendAngulerService {

  public model = new FrontendAngulerModel()

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
}
