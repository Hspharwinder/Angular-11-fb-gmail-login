import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,  SocialLoginModule],
  providers: [  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider( '35284573000-9pi13jhise7jca9m93jchbvua56b9kqe.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1786014478252000')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
