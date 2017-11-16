import { Component, OnInit , Input} from '@angular/core';
import { CustomForm, InputSelect} from '../models/index';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-generic-input',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {
  @Input() title: string;
  @Input() inputs: CustomForm[];
  mouseoverSubmit: boolean = false;
  map: { [url: string]: Observable<InputSelect[]>; } = { };
  constructor() { }

  ngOnInit() {
    this.inputs.forEach( (val) => {
        
    })
  }
  submit(formValues){
    console.log(formValues);
  }
  setError(value) {
    if (value != null && value.invalid && value.touched || this.mouseoverSubmit){
      return 'error';
    }
  }
}
