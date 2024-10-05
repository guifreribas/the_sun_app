import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private baseUrl = 'http://localhost:3000/api/v1';
    constructor(private http: HttpClient) { }

    //All article
    getArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(`${this.baseUrl}/articles`);
    }

    getArticleById(id: string): Observable<Article> {
        return this.http.get<Article>(`${this.baseUrl}/article/${id}`);
    }

    createArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(`${this.baseUrl}/publish/article`, article);
    }
}
