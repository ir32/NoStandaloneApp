import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts: any[] = [];
  userId!: number; // Declare userId with type number

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve userId from the route
    this.userId = +this.route.snapshot.paramMap.get('userId')!;
    console.log('Received userId:', this.userId);

    // Fetch posts
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
