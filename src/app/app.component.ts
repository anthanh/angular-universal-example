import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;
  photos$: Observable<any[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.photos$ = this.http
      .get<any[]>('http://jsonplaceholder.typicode.com/photos?_limit=10');
  }

}
