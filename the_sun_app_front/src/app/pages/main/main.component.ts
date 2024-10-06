import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { firstValueFrom } from 'rxjs';
import { Article, GetArticlesResponse } from '../../models/article';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { Main } from '../../models/main';

const muckData = [
  {
    p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
    p2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
  },
  {
    p1: 'Lorem seconddolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
    p2: 'Lorem ipsum second, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
  },
  {
    p1: 'Third Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
    p2: 'Lorem ipsum dolor sit amet, third third consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
  },
  {
    p1: 'Fourth Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
    p2: 'Lorem ipsum dolor sit amet, fourth. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisi velit.',
  },
];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @ViewChild('button1') button1!: ElementRef<HTMLButtonElement>;
  @ViewChild('button2') button2!: ElementRef<HTMLButtonElement>;
  @ViewChild('button3') button3!: ElementRef<HTMLButtonElement>;
  @ViewChild('button4') button4!: ElementRef<HTMLButtonElement>;

  public article: Article | undefined;
  public articles: Article[] | undefined;
  public main: Main | undefined;
  public selector = new FormControl();

  public muckData = muckData;
  public muckDataIndex = 0;

  private articleService = inject(ArticleService);
  private mainService = inject(MainService);

  ngOnInit() {
    console.log('Main');
    this.getMain();
  }

  async getArticle() {
    const article = await firstValueFrom(
      this.articleService.getArticleById('67018cedb4a20650ebfb6991')
    );
    this.article = article;
    console.log(article);
  }

  async getArticles() {
    const articles = await firstValueFrom(this.articleService.getArticles());
    this.articles = articles.results;
    console.log(articles);
  }

  async getMain() {
    const main = await firstValueFrom(this.mainService.getMainArticle());
    this.main = main.data;
    console.log(main);
  }

  onSelectTarget(target: number) {
    this.muckDataIndex = target - 1;
    const classes = ['active', 'text-gray-900', 'bg-gray-100'];
    classes.forEach((className) => {
      this.button1.nativeElement.classList.remove(className);
      this.button2.nativeElement.classList.remove(className);
      this.button3.nativeElement.classList.remove(className);
      this.button4.nativeElement.classList.remove(className);
    });

    if (target === 1) {
      this.button1.nativeElement.classList.add('active');
      this.button1.nativeElement.classList.add('text-gray-900');
      this.button1.nativeElement.classList.add('bg-gray-100');
    } else if (target === 2) {
      this.button2.nativeElement.classList.add('active');
      this.button2.nativeElement.classList.add('text-gray-900');
      this.button2.nativeElement.classList.add('bg-gray-100');
      this.button1.nativeElement.classList.add('bg-white');
    } else if (target === 3) {
      this.button3.nativeElement.classList.add('active');
      this.button3.nativeElement.classList.add('text-gray-900');
      this.button3.nativeElement.classList.add('bg-gray-100');
      this.button1.nativeElement.classList.add('bg-white');
    } else if (target === 4) {
      this.button4.nativeElement.classList.add('active');
      this.button4.nativeElement.classList.add('text-gray-900');
      this.button4.nativeElement.classList.add('bg-gray-100');
      this.button1.nativeElement.classList.add('bg-white');
    }
  }
}
