import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MonGuardTestGuard implements CanActivate {
  constructor(private _authService : AuthService){}
  canActivate() : boolean{

    if (this._authService.isConnected()) {
      return true
    }
    else{
      return false
    }
  }

}
