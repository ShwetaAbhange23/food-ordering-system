import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  logo: string = "../../../assets/Images/logo1.png";
  images = [
    '../../../assets/Images/cappiccino.webp',
    '../../../assets/Images/fries-2.jpeg',
    '../../../assets/Images/pizza-1.jpg',
    '../../../assets/Images/momo-4.jpg',
  ];

  constructor(
    config: NgbCarouselConfig,
    private route: Router
  ) {
    config.interval = 2000;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  gotoLogin(): void {
    this.route.navigate(['/customer-login'])
  }

}