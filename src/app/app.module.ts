import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaDirectiveTestDirective } from './services/directiveCustom/ma-directive-test.directive';
import { TestDirectiveCustomComponent } from './components/test-directive-custom/test-directive-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaDirectiveTestDirective,
    TestDirectiveCustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
