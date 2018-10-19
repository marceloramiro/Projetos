import { UpdateEmpresasPage } from './../pages/update-empresas/update-empresas';
import { UpdateColaboradoresPage } from './../pages/update-colaboradores/update-colaboradores';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmpresasPage } from '../pages/empresas/empresas';
import { ColaboradoresPage } from '../pages/colaboradores/colaboradores';
import { CorletPage } from '../pages/corlet/corlet';
import { ColaboradorCorletPage } from '../pages/colaborador-corlet/colaborador-corlet';
import { ServiceProvider } from '../providers/service/service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ColorpickProvider } from '../providers/colorpick/colorpick';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmpresasPage,
    ColaboradoresPage,
    CorletPage,
    ColaboradorCorletPage,
    UpdateColaboradoresPage,
    UpdateEmpresasPage
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
    EmpresasPage,
    ColaboradoresPage,
    CorletPage,
    ColaboradorCorletPage,
    UpdateColaboradoresPage,
    UpdateEmpresasPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    ColorpickProvider,
    ColorpickProvider,
  ]
})
export class AppModule {}
