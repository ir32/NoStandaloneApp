import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';  // Correct path

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }
}
 