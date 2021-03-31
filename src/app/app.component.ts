import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dynamic-css';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
  }

  loadTheme(cssFile: string) {

    const headEl = this.document.getElementsByTagName('head')[0];

    const existingLinkEL = this.document.getElementById('client-theme') as HTMLLinkElement;

    if (existingLinkEL) {
      existingLinkEL.href = cssFile;
    } else {
      const newLinkEl = this.document.createElement('link');
      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = cssFile; 
      headEl.appendChild(newLinkEl);
    }
  }
}
