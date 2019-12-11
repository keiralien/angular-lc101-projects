import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://cosmos-images1.imgix.net/file/spina/photo/13495/8163453067_452edb4d3a_o.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=2100';
  image3 = 'http://3.bp.blogspot.com/-aKrPL-IxmR8/UNaTGJSi1iI/AAAAAAAAedU/fp_2dKbho-Y/s320/0000acf0_big.jpeg';

  constructor() { }

  ngOnInit() {
  }

}