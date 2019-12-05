import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogInterface, Blog } from '../../class/Blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  blogForm: FormGroup;
  blogActual: BlogInterface;
  idBlog: number;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(p => {
      if (p.id) {
        this.idBlog = p.id;
      }
    });
  }

  ngOnInit() {
    this.initializeEdit();
    this.initForm();
  }

  initForm() {
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['']
    });
  }

  onEdit(): void {
    const title = this.blogForm.get('title').value;
    const image = this.blogForm.get('image').value;
    const description = this.blogForm.get('description').value;

    const editBlog = new Blog(title, image, description);

    this.blogService.updateBlog(this.idBlog, editBlog)
      .then(res => {
        if (res) {
          this.router.navigate(['/blogs']);
        } else {
          this.errorMessage = 'Errerur modification';
        }
      })
      .catch(err => {
        this.errorMessage = 'Erreur : ' + err;
      });
  }

  initializeEdit(): void {
    this.blogService.getBlog(this.idBlog)
      .then(res => {
        if (res === null) {
          // Erreur, l'id en paramètre n'est pas bon
          this.router.navigate(['/blogs']);
          return;
        }
        this.blogActual = res;
      });
  }
}
