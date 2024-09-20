import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

const  router = inject(Router);
const  toastr = inject(ToastrService);

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError(error=>{
    console.log(error);
    toastr.error(error)
    throw error;
  }));
};
