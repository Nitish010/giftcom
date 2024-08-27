import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (localStorage.getItem('genderCode')!=null) {
        let genderCode: string =  localStorage.getItem('genderCode') || ''
        if(genderCode == 'Boy' || genderCode == 'Girl' || genderCode == 'Couple'){
          return true
        }
      }
      this.router.navigate(['/login'])
      alert('login first')
      return false
  }
  
}
