import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registerClientForm } from '../../models/auth/registerClientForm.model';
import { client } from '../../models/client/client.model';
import { loginForm } from '../../models/auth/loginForm.model';
import { tokenService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUserSubject : BehaviorSubject<client>
  public currentUser : Observable<client>

  public get currentUserValue(): client {
    return this._currentUserSubject.value;
  }

  constructor(
    private _client: HttpClient,
    private _route: Router,
    private _tokenService : tokenService
    ) {
    this._currentUserSubject = new BehaviorSubject<client>(JSON.parse(this._tokenService.getToken()));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  setToken(token): void{
    this._currentUserSubject.next(token)
  }

    // login d'un utilisateur
    Login(userLogin:loginForm) : Observable<client>{
      return this._client.post<any>(`${environment.apiUrl}/Auth/login`, userLogin)
      .pipe(map(client => {
      // Enregistrement du token + refreshToken
      this._tokenService.saveToken(client.accessToken)
      this._tokenService.saveRefreshToken(client.refreshToken)
      this._currentUserSubject.next(client.accessToken);
      return client;
      }));
    }

  // enregistrement d'un nouveau client
  RegisterClient(client:registerClientForm) : Observable<any>{
    return this._client.post(`${environment.apiUrl}/Auth/registerClient`, client);
  }

  // enregistrement d'un nouvel entrepreneur
  RegisterEntrepreneur(entrepreneur:any) : Observable<any>{
    return this._client.post(`${environment.apiUrl}/Auth/registerEntrepreneur`,entrepreneur);
  }

  // logout d'un utilisateur
  logout(){
    sessionStorage.clear()
    this._currentUserSubject.next(null);
    this._route.navigate(['auth', 'login']);
  }

  // vérification qu'un utilisateur est bien connecté
  isConnected() : boolean {
    return (this.currentUserValue != null);
  }
}
