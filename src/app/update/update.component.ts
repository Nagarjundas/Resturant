import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  alert: boolean = false;
  updateForms =  new FormGroup({
    name: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')
  });

  constructor(private service : ServiceService ,private router:ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot.queryParams);
    // console.log(this.router.snapshot.params.id);
    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.updateForms =  new FormGroup({
        name: new FormControl('jdjdj'),
        Address: new FormControl('dfdf'),
        email: new FormControl('ddfd'),
        mobile: new FormControl('3444444')
      });
    })
  }
  updateForm() {
    console.log("hiiiiiiiiiiiiiiiiii");
    this.alert = true;
    this.service.updateResto(this.router.snapshot.params.id,this.updateForms.value).subscribe((result)=>{console.log(result)});
    console.log("hiiiiiiiiiiiiiiiiii");
  }
  closeAlert() {
    this.alert = false;
  }
}
