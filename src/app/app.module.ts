import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemFilterPipe } from './pipes/item-filter.pipe';
import { CssTestComponent } from './css-test/css-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemPageComponent,
    ItemFilterPipe,
    CssTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
