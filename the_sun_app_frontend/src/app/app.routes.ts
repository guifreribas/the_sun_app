import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ArticleComponent } from "./pages/article/article.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: "article/:id", component: ArticleComponent },
];
