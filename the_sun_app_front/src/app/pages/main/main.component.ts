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
    s1: `In May 2024, the Sun had a big storm that made bright lights in the sky, called auroras, appear in places that don't usually see them, like Greece. The storm also caused some problems for satellites, making things like GPS and radio not work well for a little while.

        Effects for humans:

        GPS (like maps on phones) might not work well
        Trouble with radios and internet from satellites
        Lights might flicker or go out in some areas
        Prompt ( science)
        I want a summary of this article, make it simple to understand for a scientists audience, tell me the main events and make me a list of possible effects for humans such as lost of signal for communications of satelite affection. `,
  },
  {
    s1: `In May 2024, the Sun released very strong solar storms that caused big changes in Earth's magnetic field. These storms were powerful enough to create beautiful auroras (northern lights) in places that don't normally see them, like Greece. They also caused problems with satellites, making it hard to use things like GPS and some radio signals.

        Possible effects on humans:

        Loss of satellite signals (GPS, internet)
        Problems with radio communications
        Possible power outages in some areas`,
  },
  {
    s1: `In May 2024, powerful solar storms took place, including solar flares and Coronal Mass Ejections (CMEs) from May 10–13. These storms led to a significant geomagnetic event, the strongest since 1989. This event caused auroras to be visible much farther south than usual, such as in Greece. The geomagnetic storm disrupted communications, affecting radio signals, GPS, and even satellite systems like GOES-16 and Starlink. Potential Effects on Humans: Loss of satellite-based communications GPS disruptions Radio signal interference Possible power grid instability in some regions. For more, visit ESA’s page.`,
  },
  {
    s1: `The solar storms of May 2024 featured intense geomagnetic disturbances, including powerful solar flares and coronal mass ejections (CMEs), with the strongest geomagnetic storm since 1989. These events caused significant impacts on Earth's radiation belts and satellite systems. Scientists monitored disruptions to GPS, satellite communications, and power grids.

        Possible effects on humans:

        Loss of satellite communication (GPS, internet)
        Radio signal interference
        Potential disruptions to power grids`,
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
  public muckDataIndex = 2;

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
    // const classes = ['active', 'text-gray-900', 'bg-gray-100'];
    // classes.forEach((className) => {
    //   this.button1.nativeElement.classList.remove(className);
    // });
    this.button1.nativeElement.classList.remove(
      ...['active', 'text-gray-900', 'bg-gray-100']
    );
    this.button2.nativeElement.classList.remove(
      ...['active', 'text-gray-900', 'bg-gray-100']
    );
    this.button3.nativeElement.classList.remove(
      ...['active', 'text-gray-900', 'bg-gray-100']
    );
    this.button4.nativeElement.classList.remove(
      ...['active', 'text-gray-900', 'bg-gray-100']
    );

    if (target === 1) {
      this.button1.nativeElement.classList.add(
        ...['active', 'text-gray-900', 'bg-gray-100']
      );
    } else if (target === 2) {
      this.button2.nativeElement.classList.add(
        ...['active', 'text-gray-900', 'bg-gray-100']
      );
      this.button1.nativeElement.classList.add('bg-white');
    } else if (target === 3) {
      this.button3.nativeElement.classList.add(
        ...['active', 'text-gray-900', 'bg-gray-100']
      );
      this.button1.nativeElement.classList.add('bg-white');
    } else if (target === 4) {
      this.button4.nativeElement.classList.add(
        ...['active', 'text-gray-900', 'bg-gray-100']
      );
      this.button1.nativeElement.classList.add('bg-white');
    }
  }
}
