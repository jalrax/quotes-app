import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { QuotePage } from '../pages/quote/quote';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesProvider } from '../providers/quotes/quotes';
import { MyApp } from './app.component';


@NgModule({
  declarations: [
    MyApp,
    // FavoritesPage,
    // LibraryPage,
    // QuotesPage,
    QuotePage,
    // SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // FavoritesPage,
    // LibraryPage,
    // QuotesPage,
    QuotePage,
    // SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesProvider
  ]
})
export class AppModule {}
