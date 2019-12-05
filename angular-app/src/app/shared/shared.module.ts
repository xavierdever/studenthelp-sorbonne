import {NgModule} from '@angular/core';

import {LoadingComponent} from './components/loading/loading.component';
import {MaterialModule} from './material.module';
import {LayoutModule} from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoadingComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoadingComponent,
    ContactComponent,
    BrowserModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
