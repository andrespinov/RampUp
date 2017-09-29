import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  image : String;
  basePath: String;
  index = 0;

  constructor() {

    setInterval(() => this.changeImage(), 3000);
  }

  changeImage(){
    if(this.index == 4){
      this.index = 0;
    }
    this.image =  "../../assets/bannerImage" + this.index + ".jpg";
    console.log(this.image);
    this.index += 1;
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