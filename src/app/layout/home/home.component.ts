import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usdAmount: number = 0;
  eurAmount: number = 0;
  exchangeRate: number = 0.81;


  constructor() { }

  ngOnInit(): void {
  }

  convert(){

  }

}
