import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const PHOTOS = makeStateKey('photos');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;
  photos: any[];

  constructor(private http: HttpClient, private state: TransferState) { }

  ngOnInit() {
    this.photos = this.state.get(PHOTOS, null as any);

    if (!this.photos) {
      this.http
        .get('http://jsonplaceholder.typicode.com/photos?_limit=10')
        .subscribe((data: any[]) => {
          this.photos = data;
          this.state.set(PHOTOS, data as any);
        });
    }
  }

}
