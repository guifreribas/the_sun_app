import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetMainResponse, Main } from '../models/main';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private http = inject(HttpClient);

  constructor() {}

  getMainArticle(): Observable<GetMainResponse> {
    return this.http.get<GetMainResponse>(`${this.baseUrl}/main/article`);
  }
}
