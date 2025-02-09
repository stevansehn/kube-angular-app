import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  // books: Book[] = [
  //   { title: 'The Great Gatsby' },
  //   { title: '1984' },
  //   { title: 'To Kill a Mockingbird' },
  // ];
  books: Book[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe({
      next: (books) => (this.books = books),
      error: (error) => console.error('Error fetching books:', error),
    });
  }
}
