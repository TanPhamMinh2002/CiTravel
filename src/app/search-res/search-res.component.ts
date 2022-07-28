import { Component, OnInit,Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-res',
  templateUrl: './search-res.component.html',
  styleUrls: ['./search-res.component.css'],
})
export class SearchResComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/booking-confirm.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

}
