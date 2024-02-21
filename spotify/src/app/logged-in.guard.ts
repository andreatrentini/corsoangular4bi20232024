import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).IsLoggedIn) {
    return true;
  }
  else {
    inject(Router).navigate(['/login']);
    return false;
  }
};
