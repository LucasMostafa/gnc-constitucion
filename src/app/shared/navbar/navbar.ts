import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  readonly NAVBAR_HEIGHT = 72;
  isOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onNavigate(event: any, sectionId: string) {
    if (event) event.preventDefault();
    this.isOpen = false;

    const id = sectionId.replace('#', '');
    const el = this.document.getElementById(id);
    if (el) {
      setTimeout(() => {
        const y = el.getBoundingClientRect().top + window.pageYOffset - this.NAVBAR_HEIGHT;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 120);
    }
  }
}
