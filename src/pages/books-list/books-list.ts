import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book, BooksService } from '../../services/books';
import { BookDetailsPage } from '../book-details/book-details';


@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html',
})
export class BooksListPage implements OnInit{

  public books: Book[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private booksService: BooksService) {
  }

  ngOnInit(){
    this.loadBooks();
  }

  loadBooks(){
    this.booksService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    })
  }

  itemSelected(book){
    this.navCtrl.push(BookDetailsPage, {book});
  }
}
