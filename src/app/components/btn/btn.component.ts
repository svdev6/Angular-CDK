import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'red' | 'grayLight' | 'sky' = 'primary';

  mapColors = {
    success:{
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white' : true
    },
    primary:{
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white' : true
    },
    red:{
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white' : true
    },
    grayLight:{
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true
    },
    sky:{
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white' : true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    const colors = this.mapColors[this.color];
    if(colors){
      return colors;
    }
    return{};
  }
}
