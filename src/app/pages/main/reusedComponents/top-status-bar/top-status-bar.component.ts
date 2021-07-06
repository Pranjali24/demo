import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, A11y, Autoplay, EffectFade, Zoom } from 'swiper/core';
SwiperCore.use([Pagination, A11y, Autoplay,EffectFade, Zoom]);

@Component({
  selector: 'app-top-status-bar',
  templateUrl: './top-status-bar.component.html',
  styleUrls: ['./top-status-bar.component.scss']
})
export class TopStatusBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideData = [
    {
      id: 382,
      name: "Metal bluetooth cyan",
    }, {
      id: 822,
      name: "Avon",
    }, {
      id: 159,
      name: "Infrastructures",
    }, {
      id: 424,
      name: "Users Cotton",
    }, {
      id: 572,
      name: "Haptic Oklahoma Jewelery",
    }, {
      id: 127,
      name: "Circles Integration Street",
    }, {
      id: 1009,
      name: "uniform Communications Tuna",
    }, {
      id: 619,
      name: "North Carolina",
    }, {
      id: 716,
      name: "Eyeballs Rubber",
    }, {
      id: 382,
      name: "Nevada green unleash",
    }
  ]
  onSwiper(swiper:any) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
