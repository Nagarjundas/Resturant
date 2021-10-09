import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  alert: boolean = false;

  addRestaurant = new FormGroup({
    name: new FormControl('', Validators.required),
    Address: new FormControl('', [Validators.required,Validators.minLength(4)]),
    email: new FormControl('', Validators.required),
    mobile: new FormControl(''),
  });

  constructor(private service: ServiceService) {}

  ngOnInit(): void {}

  createResto() {
    // console.log(this.addRestaurant.value)
    this.service.addResto(this.addRestaurant.value).subscribe((result) => {
      console.log('data is being posted', result);
      this.alert = true;
      this.addRestaurant.reset({});
    });
  }

  closeAlert(){
    this.alert = false;
  }
}
