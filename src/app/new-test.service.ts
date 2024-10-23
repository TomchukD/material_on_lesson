import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { ItemBook } from './shared/book.interface';
import { AbstractService } from './shared/rep.service';
import { HttpConnector } from './shared/httpConector';

@Injectable({
  providedIn: 'root',
})
export class NewTestService extends AbstractService {
  public booksSubject = new BehaviorSubject<ItemBook[]>([]);

  constructor(private http: HttpConnector) {
    super();
  }

  public getData(): Observable<any> {
    return this.http.request({ method: 'GET', urlPath: 'all-books' }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }

  public nGetData(): void {
    this.getData().subscribe((data) => {
      this.booksSubject.next(data);
    });
  }

  public putData(body: any): Observable<any> {
    return this.http.request({ urlPath: '', body }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }
  // public deleteData(): Observable<any> {
  //   return this.http.delete(NewTestService.API);
  // }
  public postData(body: ItemBook): Observable<any> {
    return this.http.request({ urlPath: 'books', body }).pipe(
      catchError((error: any) => {
        return this.handelError(error);
      })
    );
  }
  // public pachData(): Observable<any> {
  //   return this.http.patch(NewTestService.API);
  // }
}
