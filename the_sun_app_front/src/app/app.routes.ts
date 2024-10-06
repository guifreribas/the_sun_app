import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
