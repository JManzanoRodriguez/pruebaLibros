import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddBookPage } from '../pages/add-book/add-book';
import { BooksListPage } from '../pages/books-list/books-list';
import { BookDetailsPage } from '../pages/book-details/book-details';

import { HttpClientModule } from "@angular/common/http";
import { BooksService } from '../services/books';
import { ConfirmAlertService } from '../services/confirmAlert';
import { ToastService } from '../services/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddBookPage,
    BooksListPage,
    BookDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddBookPage,
    BooksListPage,
    BookDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BooksService,
    ConfirmAlertService,
    ToastService
  ]
})
export class AppModule {}
