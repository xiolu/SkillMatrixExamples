import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAccessService {

  private access: boolean = false;
  constructor() { }

  public checkAccess(): Observable<boolean> {
    return of(this.access);
  }
}
