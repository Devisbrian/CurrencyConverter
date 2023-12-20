import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // Replace with the actual API URL
  private apiUrl = `https://openexchangerates.org/api/`; 
  

  constructor(private http: HttpClient) {}

  getExchangeRate(baseCurrency: string, targetCurrency: string): Observable<any> {
    const url = `${this.apiUrl}?base=${baseCurrency}&symbols=${targetCurrency}`;
    return this.http.get(url);
  }
}
