import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-arrival-time',
  templateUrl: './arrival-time.component.html',
  styleUrls: ['./arrival-time.component.css']
})

export class ArrivalTimeComponent implements OnInit {

  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    const f = this.renderer2.createElement('script');
    f.type = 'text/javascript';
    f.src = 'assets/js/picker.js';
    f.text = ``;
    this.renderer2.appendChild(this._document.body, f);
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/arrivalTime.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

}
