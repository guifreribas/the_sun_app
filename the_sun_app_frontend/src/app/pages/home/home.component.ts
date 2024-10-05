import { Component } from "@angular/core";
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { NewsComponent } from "../../components/news/news.component";
import { SearchComponent } from "../../components/search/search.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [WelcomeComponent, NewsComponent, SearchComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {}
