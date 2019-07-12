import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-intel-browser',
  templateUrl: './intel-browser.component.html',
  styleUrls: ['./intel-browser.component.scss']
})
export class IntelBrowserComponent implements OnInit {
  options = [
    { name: 'ESA', url: 'http://www.esa.int/ESA' },
    { name: 'POLSA', url: 'https://www.polsa.gov.pl/pl' }
  ];
  source: SafeResourceUrl = null;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  selectSource(value: string): void {
    this.source = value ? this.domSanitizer.bypassSecurityTrustResourceUrl(value) : null;
  }

}
