import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-welcome",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./welcome.component.html",
	styleUrl: "./welcome.component.scss",
})
export class WelcomeComponent {}
