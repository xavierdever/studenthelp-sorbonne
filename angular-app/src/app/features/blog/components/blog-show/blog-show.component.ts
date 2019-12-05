import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogInterface } from '../../class/Blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.scss']
})
export class BlogShowComponent implements OnInit {

  blog: BlogInterface;
  idBlog: number;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.params.subscribe(p => {
      if (p.id) {
        this.idBlog = p.id;
      }
    });
  }

  ngOnInit() {
    this.blogService.getBlog(this.idBlog)
      .then((res) => {
        if (!res || res === null) {
          // Erreur, l'id en paramètre n'est pas bon
          this.router.navigate(['/blogs', 'list']);
          return;
        }
        this.blog = res;
      });
  }
}
