import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usdAmount: number = 0;
  eurAmount: number = 0;
  exchangeRate: number = 0.81;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(){}
  currencyConverterForm : FormGroup = new FormGroup({
    amount: new FormControl("", Validators.required),
    from : new FormControl("",Validators.required),
    to : new FormControl("",Validators.required)
  })

}
