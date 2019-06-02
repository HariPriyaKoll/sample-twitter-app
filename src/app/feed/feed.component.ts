import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  
})
export class FeedComponent implements OnInit {
  ngOnInit(){
   
  }
  constructor(private userService : UserService) { }

  tweetText = '';

  isUserInCollection(collection: string[], userId: string) : boolean {
    return collection.indexOf(userId) != -1;
  }

  onFav(tweet) {
    if (!this.isUserInCollection(tweet.fav,this.userService.getCurrentUser())) {
      tweet.fav.push(this.userService.getCurrentUser());
      console.log(tweet.fav);
    }
  }

  onRt(tweet) {
    if (!this.isUserInCollection(tweet.rt, this.userService.getCurrentUser())) {
      tweet.rt.push(this.userService.getCurrentUser());
      console.log(tweet.rt);
    }
  }

  onNewTweet() {
    console.log(this.tweetText);
    this.tweets.unshift(
      {
        avatar : "assets/avatars/john.jpg",
        uname : "John",
        text: this.tweetText,
        date : new Date(),
        fav: [],
        rt: []
      }
    );
    this.tweetText = '';
  }



  tweets = [
    {
      avatar : "assets/avatars/darnell.jpg",
      uname : "Wawan",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "assets/avatars/connor.jpg",
      uname : "Rex",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "assets/avatars/sally.jpg",
      uname : "Hayate",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "assets/avatars/jake.jpg",
      uname : "Jamil",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "assets/avatars/brenda.jpg",
      uname : "Luna",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
    {
      avatar : "assets/avatars/scott.jpg",
      uname : "Sapix",
      text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. ",
      date : new Date(),
      fav: [],
      rt: []
    },
  ];

}
