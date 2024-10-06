import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public articles: Article[] = [];
  public article1: Article | undefined;
  public article2: Article | undefined;
  public article3: Article | undefined;
  public article4: Article | undefined;

  private articleService = inject(ArticleService);

  ngOnInit() {
    this.getArticles();
  }

  async getArticles() {
    const articles = await firstValueFrom(this.articleService.getArticles());
    this.articles = articles.results;
    console.log(articles);
    this.article1 = this.articles[0];
    this.article2 = this.articles[1];
    this.article3 = this.articles[2];
    this.article4 = this.articles[3];
  }
}
//
