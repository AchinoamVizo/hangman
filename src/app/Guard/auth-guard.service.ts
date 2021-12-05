import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanLoad, Route, UrlSegment, CanActivateChild } from '@angular/router'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild {

  constructor(private userService: UsersService, private router: Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.user$.pipe(
      map(value => !!value),
      tap((x => { if (!x) this.router.navigate(['home'])}))
    )
  }

}