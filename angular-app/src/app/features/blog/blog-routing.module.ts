import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard/auth-guard.service';
import { BlogNewComponent } from './components/blog-new/blog-new.component';
import { BlogShowComponent } from './components/blog-show/blog-show.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogIndexComponent } from './pages/blog-index/blog-index.component';
import { NotAuthGuardService } from 'src/app/core/services/not-auth-guard/not-auth-guard.service';

export const BLOG_ROUTES: Routes = [
    {
        path: 'blogs',
        canActivate: [NotAuthGuardService],
        component: BlogIndexComponent,
        children: [
            {
                path: 'add',
                canActivate: [NotAuthGuardService],
                component: BlogNewComponent
            },
            {
                path: ':id',
                canActivate: [NotAuthGuardService],
                component: BlogShowComponent
            },
            {
                path: 'update/:id',
                canActivate: [NotAuthGuardService],
                component: BlogEditComponent
            },
            {
                path: '',
                canActivate: [NotAuthGuardService],
                component: BlogListComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/blogs',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(BLOG_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { }
