import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileDemoComponent } from './profile-demo/profile-demo.component';
import { FormsModule } from '@angular/forms';

// Include ApiModule and HttpClientModule here for the @lab5e/ng-userapi library
// The HttpClientModule can only be included once - please refer to the README.md
// file in the source repository at https://github.com/lab5e/ng-userapi
import { ApiModule } from '@lab5e/ng-userapi-t0';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApiModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
