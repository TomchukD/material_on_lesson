import { Component, OnInit } from '@angular/core';
import { ItemBook } from '../shared/book.interface';
import { NewTestService } from '../new-test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  public itemsBook: ItemBook[] = [];

  constructor(private newTestService: NewTestService) {}

  ngOnInit(): void {
    this.newTestService.nGetData();
    this.newTestService.booksSubject.subscribe((data) => {
      this.itemsBook = data;
    });
  }
  clear(): void {
    this.newTestService.booksSubject.next([]);
  }
}
