import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly url = "http://localhost:3001/"
  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get(`${this.url}deposit`);
  }
}
