import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavouritesPage } from '../favourites/favourites';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavouritesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
