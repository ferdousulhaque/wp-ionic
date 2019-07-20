import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { NewsDetailPage } from '../news-detail/news-detail';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts;

  constructor(public navCtrl: NavController, private postsCtrl: PostsProvider, private loadingCtrl: LoadingController) {
   
  }

  detailPage(post){
    this.navCtrl.push(NewsDetailPage,{post: post});
  }

  ngOnInit() {
    this.loadPosts();
  }
 
  async loadPosts() {
    let loading = await this.loadingCtrl.create({
      //
    });
    await loading.present();
 
    this.postsCtrl.getLatestPosts().subscribe(data => {
      //console.log(data);
      this.posts = data;
      loading.dismiss();
     });
  }

}
