import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './core/services/auth-interceptor/auth-interceptor.service';
import {SharedModule} from './shared/shared.module';
import { BlogModule } from './features/blog/blog.module';
import { CoreModule } from './core/core.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BlogModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
