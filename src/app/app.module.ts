import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingleProductPage } from '../pages/single-product/single-product';
import { RegisterPage } from '../pages/register/register';

import { FavouritesPage } from '../pages/favourites/favourites';
import { SettingsPage } from '../pages/settings/settings';
import { UserdetailPage } from '../pages/userdetail/userdetail';
import { MessageServiceProvider } from '../providers/message-service/message-service';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingleProductPage,
    RegisterPage,
    TabsPage,
    FavouritesPage,
    UserdetailPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingleProductPage,
    RegisterPage,
    TabsPage,
    FavouritesPage,
    UserdetailPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     MessageServiceProvider
 
   
  ]
})
export class AppModule {

  
  
}
