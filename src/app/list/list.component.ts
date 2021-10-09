import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public restoList: any;

  constructor(private commonService: ServiceService) {}

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.restoList = result;
      console.log(this.restoList);
    });
  }

  deleteResto(id: any) {
    this.commonService.deleteData(id).subscribe((result) => {
      this.restoList= result;
    });
    console.log(this.restoList);
  }
}
