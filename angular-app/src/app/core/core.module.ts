import {NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from './navigation.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    SharedModule,
    NavigationModule,
    AppRoutingModule
  ],
  exports: [
    SharedModule,
    NavigationModule,
    AppRoutingModule
  ]
})
export class CoreModule {
}
