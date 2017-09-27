import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  image = "https://api.adorable.io/avatars/206";
  images = ["https://api.adorable.io/avatars/206",
    "https://api.adorable.io/avatars/207",
    "https://api.adorable.io/avatars/208",
    "https://api.adorable.io/avatars/209"];
  index = 0;

  constructor() {

    setInterval(function () {
      this.index += 1;
      if (this.index == this.images.lenght) {
        this.index = 0;
      }
      this.image = this.images[this.index];
    }, 300);
  }
}



/*function ImageSliderController($scope) {
  $scope.timeInterval = 3000;
  $scope.slides = [
    {image: "https://api.adorable.io/avatars/206"},
    {image: "https://api.adorable.io/avatars/207"},
    {image: "https://api.adorable.io/avatars/208"},
    {image: "https://api.adorable.io/avatars/209"},
  ];
}*/