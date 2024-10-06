/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article!: Article; 
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.articleService.getArticleById(id).subscribe({
        next: (response) => {
          this.article = response; 
        },
        error: (error) => {
          console.error('Error fetching article:', error);
        }
      });
    }
  }
}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article = {
    id: '1',
    title: 'Sample Article Title',
    description: 'This is a brief description of the article.',
    url: '',
    urlToImage: 'https://via.placeholder.com/600x400',
    createdAt: new Date(),
  };

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.articleService.getArticleById(id).subscribe({
        next: (response) => {
          this.article = response;  // Datos reales desde la API
        },
        error: (error) => {
          console.error('Error fetching article:', error);
          // Mantén el artículo ficticio si hay un error
        }
      });
    }
  }
}
