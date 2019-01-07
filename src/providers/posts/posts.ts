import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
  postsUrl = environment.site_url + environment.posts_uri;

  constructor(public http: HttpClient) {
    
  }

  getLatestPosts(){
    return this.http.get(this.postsUrl);
  }

}
