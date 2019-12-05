import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Blog } from 'src/app/features/blog/class/Blog';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  blogsSubscription: Subscription;

  @Input() loadingRequest: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private blogService: BlogService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadingRequest = true;

    this.blogsSubscription = this.blogService.blogsSubject.subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
    this.blogService.getBlogs();
    this.blogService.emmitBlogs();

    this.loadingRequest = false;
  }

  onBlog(index: number) {
    this.router.navigate(['/blogs', index]);
  }

  onAddBlog() {
    this.router.navigate(['/blogs', 'add']);
  }

  onUpdateBlog(index: number) {
    this.router.navigate(['/blogs', 'update', index]);
  }

  onDeleteBlog(_id: number, index: number) {
    if (this.auth.isLoggedIn()) {
      if (confirm(`Souhaitez-vous vraiment supprimer "${this.blogs[index].title}" ?`)) {
        this.blogService.deleteBlog(_id, index)
          .then((res) => {
            if (!res) {
              console.log('Erreur de suppression');
            }
          });
      }
    }
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  ngOnDestroy() {
    this.blogsSubscription.unsubscribe();
  }
}
