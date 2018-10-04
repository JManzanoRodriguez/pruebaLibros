import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book, BooksService } from '../../services/books';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from '../../services/toast';
import { ConfirmAlertService } from '../../services/confirmAlert';
import { BooksListPage } from '../books-list/books-list';


@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsPage implements OnInit {

  public book: Book;
  public form: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private booksService: BooksService,
              private toastService: ToastService,
              private confirmAlert: ConfirmAlertService) {
  }

  ngOnInit(){
    this.book = this.navParams.get('book');
    
    this.form = this.formBuilder.group({
      title: [''],
      language: [''],
      edition: [''],
      publisher: ['']
    });

    this.form.patchValue(this.book);
  }

  formBookDetailSubmitted(){
    this.book = {id: this.book.id, ...this.form.value};

    this.booksService.updateBook(this.book).subscribe((book: Book) => {
      this.toastService.presentToast('Book updated');
    },() => {
      this.toastService.presentToast('Error updating book');
    })
  }

  deleteBook(){
    
    this.confirmAlert.presentConfirm('Delete book', 'Are you sure?');

    this.confirmAlert.okPressed.subscribe(() => {
      this.booksService.deleteBook(this.book.id).subscribe(() => {
        this.toastService.presentToast('Libro borrado');
        this.navCtrl.setRoot(BooksListPage);
      })
    });

    this.confirmAlert.cancelPressed.subscribe(() => {
      this.toastService.presentToast('Operation canceled');
    });
  }

}
