import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgUpgradeComponent } from './ng-upgrade/ng-upgrade.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgUpgradeService } from './ng-upgrade/ng-upgrade.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    NgUpgradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
  ],
  providers: [
    NgUpgradeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
