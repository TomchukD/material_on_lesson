import { Component } from '@angular/core';
import { NewTestService } from '../new-test.service';
import { ItemBook } from '../shared/book.interface';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css',
})
export class AddBooksComponent {
  public autor = '';
  public nameBook = '';

  constructor(private newTestService: NewTestService) {}

  public onAdd(): void {
    const newBook: ItemBook = {
      author: this.autor,
      favorite: false,
      id: '123',
      title: this.nameBook,
    };
    this.newTestService.postData(newBook).subscribe(() => {
      this.newTestService.nGetData();
    });
    console.log(this.autor, this.nameBook);
  }
}
