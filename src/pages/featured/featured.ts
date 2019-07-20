import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { LoadingController } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html'
})
export class FeaturedPage {

  featured_posts;

  constructor(public navCtrl: NavController, 
              private postsCtrl: PostsProvider, 
              private loadingCtrl: LoadingController) {
    /* this.postsCtrl.getLatestPosts().subscribe(data => {
     console.log(data);
     this.posts = data;
    }); */
   }
 
   ngOnInit() {
     this.loadPosts();
   }

   detailPage(post){
    this.navCtrl.push(NewsDetailPage,{post: post});
  }

  
   async loadPosts() {
     let loading = await this.loadingCtrl.create({
       //
     });
     await loading.present();
  
     this.postsCtrl.getFeaturedPosts().subscribe(data => {
       //console.log(data);
       this.featured_posts = data;
       loading.dismiss();
      });
   }
 

}
