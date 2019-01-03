import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private listService:ListService) { }

  ngOnInit() {
    this.getAllList();
  }


  getAllList(){
    this.listService.getList()
    .subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.error(error);
      }
    )
  }
}
