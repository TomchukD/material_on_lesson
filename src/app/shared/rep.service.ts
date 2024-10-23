import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AbstractService {
  constructor() {}

  protected handelError(error: any): Observable<any> {
    return throwError(error);
  }
}
