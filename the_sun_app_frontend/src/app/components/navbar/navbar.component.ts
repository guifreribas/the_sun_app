import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
	public isMenuOpen = false;

	onOpenMenu() {
		this.isMenuOpen = true;
	}

	onCloseMenu() {
		this.isMenuOpen = false;
	}
}
