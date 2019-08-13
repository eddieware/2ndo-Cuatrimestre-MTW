import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  //INTERPOLACION
  pageTitle:string = "Data binding in AAngular";
  imageUrl:string = "assets/images/SPIDERMAN.jpg";

  constructor() { }

  ngOnInit() {
  }

}
