import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
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
