import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apache';
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _activedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadHomePage();
  }

  loadHomePage() {
    this._router.navigate([{outlets: {outlet: ['login']}}], {skipLocationChange: true});
  }
}
