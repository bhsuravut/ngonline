import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsUrl= 'https://newsapi.org/v2/top-headlines?country=th&apiKey=23b1168e76064531b1e65def2205a422';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    return this.http.get<News>(this.newsUrl);
  }
}
