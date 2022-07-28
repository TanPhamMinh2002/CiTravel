import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-id-submit',
  templateUrl: './id-submit.component.html',
  styleUrls: ['../../assets/css/the-datepicker.css','./id-submit.component.css']
})
export class IdSubmitComponent implements OnInit {

  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/idSubmit.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

}
