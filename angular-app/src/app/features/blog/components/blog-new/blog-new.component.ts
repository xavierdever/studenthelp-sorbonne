import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../class/Blog';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})
export class BlogNewComponent implements OnInit {

  blogForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['']
    });
  }

  onSubmit() {
    const title = this.blogForm.get('title').value;
    const image = this.blogForm.get('image').value;
    const description = this.blogForm.get('description').value;
    const blogForm = new Blog(title, image, description);

    this.blogService.addBlog(blogForm)
      .then(res => {
        if (res) {
          this.router.navigate(['/blogs']);
        } else {
          this.errorMessage = 'Blog existe déja';
        }
      })
      .catch(err => {
        this.errorMessage = JSON.stringify(err);
      });
  }
}
