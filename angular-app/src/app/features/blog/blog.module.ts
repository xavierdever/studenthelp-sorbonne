import {NgModule} from '@angular/core';

import {BlogIndexComponent} from './pages/blog-index/blog-index.component';
import {BlogEditComponent} from './components/blog-edit/blog-edit.component';
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {BlogNewComponent} from './components/blog-new/blog-new.component';
import {BlogShowComponent} from './components/blog-show/blog-show.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogIndexComponent,
    BlogEditComponent,
    BlogListComponent,
    BlogNewComponent,
    BlogShowComponent,
  ],
  exports: [
    BlogIndexComponent
  ],
  providers: [],
  bootstrap: [BlogIndexComponent]
})
export class BlogModule {
}
