import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/Post';
import { ApiService } from '../../services/api.service';
import { PostCardComponent } from '../post-card/post-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [PostCardComponent, NgIf, NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .getData<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => (this.posts = data));
  }
}
