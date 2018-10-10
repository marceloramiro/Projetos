import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmpresasPage } from '../pages/empresas/empresas';
import { ColaboradoresPage } from '../pages/colaboradores/colaboradores';
import { CorletPage } from '../pages/corlet/corlet';
import { ColaboradorCorletPage } from '../pages/colaborador-corlet/colaborador-corlet';
import { ServiceProvider } from '../providers/service/service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EmpresasPage,
    ColaboradoresPage,
    CorletPage,
    ColaboradorCorletPage,
   // HttpClientModule,
   // HttpResponse,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode: 'md'
    }),
    //HttpResponse,
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EmpresasPage,
    ColaboradoresPage,
    CorletPage,
    ColaboradorCorletPage,
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
  ]
})
export class AppModule {}
