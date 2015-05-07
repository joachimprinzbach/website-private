/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/annotations';
import {bootstrap} from 'angular2/angular2';
import {For} from 'angular2/directives';
import {BlogService} from "wp-blog/service/BlogService";
import {WpPost} from "wp-blog/wp-post/wpPost";
import {Post} from "wp-blog/Post";

@Component({
    selector: 'wp-blog',
    injectables: [
        BlogService
    ]
})
@View({
    templateUrl: 'wp-blog/view/wp-blog.html',
    directives: [WpPost, For]
})
class WpBlog {
    blogService: BlogService;
    posts: Array<Post>;

    constructor(blogService:BlogService) {
        this.blogService = blogService;
        this.posts = blogService.getPosts();
    }
}

bootstrap(WpBlog);
