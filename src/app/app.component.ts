import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }

  ngOnInit() {
  }
}
