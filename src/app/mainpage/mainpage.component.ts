import { Component, OnInit } from '@angular/core';

interface MyObject {
  name: string;
  code: number;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html'
})

export class MainpageComponent implements OnInit {

  parents:MyObject[]
  selectedParent:string;

  constructor() { 

    this.parents=[
      { name: 'General Requirements', code: 1 }, // code here as code, FIX LATER ::: TODO:...
      { name: 'Existing Conditions', code: 2 },
      { name: 'Concrete', code: 3 },
      { name: 'Masonry', code: 4 },
      { name: 'Metals', code: 5 },
      { name: 'Wood, Plastics, and Composites', code: 6 },
      { name: 'Thermal and Moisture Protection', code: 7 },
      { name: 'Openings', code: 8 },
      { name: 'Finishes', code: 9 },
      { name: 'Specialties', code: 10 },
      { name: 'Equipment', code: 11 },
      { name: 'Furnishings', code: 12 },
      { name: 'Special Construction', code: 13 },
      { name: 'Conveying Equipment', code: 14 }
    ]
  }

  ngOnInit() {
  }

  on_selected_parent(event){
    let selected_parent = event.target.value;
    console.log(selected_parent)
  }

}
