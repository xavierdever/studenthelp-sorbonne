import { Injectable } from '@angular/core';
import { BlogInterface } from '../../blog/class/Blog';
import { Subject } from 'rxjs';
import { ApiHelperService } from 'src/app/core/services/api-helper/api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: BlogInterface[] = [];
  blogsSubject = new Subject<BlogInterface[]>();

  constructor(private api: ApiHelperService) { }

  // Emet contenu de blogs[] à travers le subject
  emmitBlogs() {
    this.blogsSubject.next(this.blogs);
  }

  getBlogs(): void {
    this.api.requestApi({ action: '/blogs', method: 'GET' })
      .then((res) => {
        if (!res) {
          throw new Error('Error get all blogs');
        }
        this.blogs = [];
        res.blogs.forEach((blog) => {
          this.blogs.push(blog);
        });
        this.emmitBlogs();
      });
  }

  getBlog(index: number): Promise<BlogInterface> {
    return this.api.requestApi({ action: `/blogs/${index}`, method: 'GET' })
      .then((res) => {
        if (!res || res === null) {
          throw new Error('Error get single blog');
        }
        return res.blog;
      });
  }

  addBlog(blog: BlogInterface): Promise<boolean> {
    return this.api.requestApi({ action: '/blogs', method: 'POST', data: blog })
      .then(res => {
        if (!res) {
          throw new Error('Error add blog');
        }
        if (res.blog === null) {
          return null;
        } else {
          this.blogs.push(blog);
          this.emmitBlogs();
          return res.blog;
        }
      });
  }

  updateBlog(index: number, blog: BlogInterface): Promise<boolean> {
    const datas = {
      title: blog.title,
      image: blog.image,
      description: blog.description
    };
    return this.api.requestApi({ action: `/blogs/${index}`, method: 'PUT', data: datas })
      .then(res => {
        if (!res) {
          throw new Error('Error update blog');
        }
        if (res.blog === null) {
          return null;
        } else {
          this.blogs[index] = res.blog;
          this.emmitBlogs();
          return res.blog;
        }
      });
  }

  deleteBlog(index: number, idTab): Promise<boolean> {
    return this.api.requestApi({ action: `/blogs/${index}`, method: 'DELETE' })
      .then((res) => {
        if (!res) {
          throw new Error('Error remove building');
        }
        this.blogs.splice(idTab, 1);
        this.emmitBlogs();
        return res;
      });
  }
}
