import { DisplayProductPageModule } from './display-product/display-product.module';
import { EditUserPageModule } from './edit-user/edit-user.module';
import { EditProductPageModule } from './edit-product/edit-product.module';
import { AddProductPageModule } from './add-product/add-product.module';
import { EditCommandPageModule } from './edit-command/edit-command.module';
import { AddCommandPageModule } from './add-command/add-command.module';
import { RegisterPageModule } from './register/register.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NameUniqueDirective } from './productNameUnique/name-unique.directive';

@NgModule({
  declarations: [AppComponent, NameUniqueDirective],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterPageModule,
    AddCommandPageModule,
    EditCommandPageModule,
    AddProductPageModule,
    EditProductPageModule,
    EditUserPageModule,
    DisplayProductPageModule
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    NameUniqueDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
