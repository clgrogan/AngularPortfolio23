import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
  delay: number = 7777;
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['']);
    }, this.delay);
  }


}
