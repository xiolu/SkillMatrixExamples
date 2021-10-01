import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { LOCAL_STORAGE_KEY } from '../../enums/local-storage-key.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild
{

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      if (this.isAuthenticated())
      {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    if (this.isAuthenticated())
    {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  isAuthenticated(): boolean
  {
    // Here the auth service will check if user is logged in.
    // For now we use localstorage to mock it.
    return !!this.localStorageService.getItem(LOCAL_STORAGE_KEY.BEARER_TOKEN);

  }
}
