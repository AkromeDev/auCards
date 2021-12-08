import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      imageUrl: '../assets/tree.jpeg',
      title: 'Some radom tree',
      username: 'treelover',
      content: 'This is a treelovers lovers tree'
    },
    {
      imageUrl: '../assets/mountain.jpeg',
      title: 'Some radom mountain',
      username: 'mountainlover',
      content: 'This is a mountain for lovers'
    },
    {
      imageUrl: '../assets/biking.jpeg',
      title: 'Some radom biking',
      username: 'biker11',
      content: 'This is what I am talking about!'
    }
  ];
}
