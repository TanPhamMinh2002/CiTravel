import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-checkin-success',
  templateUrl: './checkin-success.component.html',
  styleUrls: ['./checkin-success.component.css']
})
export class CheckinSuccessComponent implements OnInit {

  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/checkinSuccess.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

}
