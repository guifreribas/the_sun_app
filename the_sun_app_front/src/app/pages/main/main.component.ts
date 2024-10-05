import { Component, inject } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private articleService = inject(ArticleService);

  ngOnInit() {
    console.log('Main');
    this.getArticles();
  }

  async getArticle() {
    const articles = await firstValueFrom(
      this.articleService.getArticleById('67018cedb4a20650ebfb6991')
    );
    console.log(articles);
  }

  async getArticles() {
    const articles = await firstValueFrom(this.articleService.getArticles());
    console.log(articles);
  }
}
