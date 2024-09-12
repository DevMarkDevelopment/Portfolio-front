import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) {
  }

  getTransactions() {
    return this.http.get("http://localhost:3001/deposit")
  }
}
