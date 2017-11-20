import { Component, OnInit, OnChanges , SimpleChanges} from '@angular/core';
import { CustomInput, CustomForm , Forms} from '../models/index';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  forms: CustomForm [] = Forms;
  currentForm: CustomForm = this.forms[0];
  constructor() { }

  ngOnInit() {
  }
  onChange(index: number) {
    this.currentForm = this.forms[index];
  }
}
