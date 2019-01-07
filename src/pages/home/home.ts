import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts;

  constructor(public navCtrl: NavController, private postsCtrl: PostsProvider) {
   this.postsCtrl.getLatestPosts().subscribe(data => {
    console.log(data);
    this.posts = data;
   });
  }

  detailPage(post){
    this.navCtrl.push(NewsDetailPage,{post: post});
  }

}
