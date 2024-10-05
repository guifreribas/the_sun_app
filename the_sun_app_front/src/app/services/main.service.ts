import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private http = inject(HttpClient);

  constructor() {}

  getMainArticles(): any {
    return this.http.get(`${this.baseUrl}/main`);
  }

  getMainArticleById(id: string): any {
    return this.http.get(`${this.baseUrl}/main/${id}`);
  }

  createMainArticle(article: any): any {
    return this.http.post(`${this.baseUrl}/publish/main`, article);
  }

  deleteMainArticle(id: string): any {
    return this.http.delete(`${this.baseUrl}/main/${id}`);
  }
}
