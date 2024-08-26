import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor( private http: HttpClient) { }
  private api = 'https://json-placeholder.mock.beeceptor.com/companies';
  
  companyData(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
