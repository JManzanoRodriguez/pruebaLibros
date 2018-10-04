import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export interface Book{
    id: number,
    title: string,
    language: string,
    edition: string,
    publisher: string
}

@Injectable()
export class BooksService {
    
    private readonly endRoot = "http://localhost:3000";

    constructor( private http: HttpClient ){

    }

    getBooks(): Observable<Book[]>{
        return this.http.get(`${this.endRoot}/books`) as Observable<Book[]>;
    }

    updateBook(book: Book): Observable<Book>{
        return this.http.put(`${this.endRoot}/books/${book.id}`, book) as Observable<Book>;
    }

    addBook(book: Book): Observable<Book>{
        return this.http.post(`${this.endRoot}/books`, book) as Observable<Book>;
    }

    deleteBook(id:number): Observable<Book>{
        return this.http.delete(`${this.endRoot}/books/${id}`) as Observable<Book>;
    }
}