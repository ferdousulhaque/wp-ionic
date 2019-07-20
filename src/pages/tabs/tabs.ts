import { Component } from '@angular/core';

import { FeaturedPage } from '../featured/featured';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeaturedPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
