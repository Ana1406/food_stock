import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ReusableComponentModule } from './reusable-component/reusable-component.module';
import { NavBarComponent } from './reusable-component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    ReusableComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
