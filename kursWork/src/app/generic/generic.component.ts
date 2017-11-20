import { Component, OnInit , Input, SimpleChanges, OnChanges} from '@angular/core';
import { CustomInput, InputSelect} from '../models/index';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/takeWhile';
import { ISubscription } from "rxjs/Subscription";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() postUrl: string;
  @Input() inputs: CustomInput[];
  private subscriptions: ISubscription[] = [];
  mouseoverSubmit: boolean = false;
  public inputSelects: { [url: string]: Observable<InputSelect[]>; } = { };
  constructor(private dataService: DataService) {

   }

  ngOnInit() {
    this.updateSelectsData()
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputs']) {
      console.log("yes");
      this.updateSelectsData();
    }
  }

  submit(form : NgForm) {
    this.subscriptions.push(this.dataService.addData<any>(form.value,this.postUrl)
      .subscribe(res =>form.resetForm()));

  }
  setError(value) {
    if (value != null && value.invalid && value.touched || this.mouseoverSubmit && value.invalid){
      return 'error';
    }
  }
  setDateValue(form, input, value){
    form.controls[input].setValue(value);
  }

  private updateSelectsData(){
    this.subscriptions.forEach( s => s.unsubscribe());
    this.subscriptions = [];
    this.inputSelects = {};
    this.inputs.forEach( (val) => {
      if (val.url != null) {
        this.inputSelects[val.url] = this.dataService.getData<InputSelect>(val.url);
        console.log(this.inputSelects[val.url]);
      }
    });
  }
}
