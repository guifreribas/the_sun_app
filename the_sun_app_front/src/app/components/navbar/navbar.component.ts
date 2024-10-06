import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public isMenuOpen = false;
  public isHome = true;

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null) {
    if (section)
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  onOpenMenu() {
    this.isMenuOpen = true;
  }

  onCloseMenu() {
    this.isMenuOpen = false;
  }
}
