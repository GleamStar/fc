import { Component, OnInit } from '@angular/core';
import { RegistrationCertificate, DocumentType, Order, Photo, UserInfo} from '../models/show.model';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public registrationCertificates: Observable<RegistrationCertificate[]>;
  public documentTypes: Observable<DocumentType[]>;
  public orders: Observable<Order[]>;
  public photos: Observable<Photo[]>;
  public userInfoes: Observable<UserInfo[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.registrationCertificates = this.dataService.getData<RegistrationCertificate>('RegistrationCertificates');
    this.documentTypes = this.dataService.getData<DocumentType>('DocumentTypes');
    this.orders = this.dataService.getData<Order>('Orders');
    this.photos = this.dataService.getData<Photo>('Photos');
    this.userInfoes =  this.dataService.getData<UserInfo>('UserInfoes');
  }
}

