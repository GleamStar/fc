import { CustomForm } from './customForm.model';

const RegistrationCertificate: CustomForm =
  {
    title: "Registration certificate",
    postUrl: "RegistrationCertificates",
    inputs: [
      {
        value:"UserId" ,
        type: 3,
        url: "UserInfoes/short"
      },
      {
        value:"Vin" ,
        type: 1
      },
      {
        type : 2,
        value : 'DataStart'
      },
      {
        type : 2,
        value : 'DataEnd'
      },
      {
        type : 2,
        value : 'DataContract'
      },
      {
        value:"InsuranceMoneyLiveLimit" ,
        type: 4
      },
      {
        value:"InsuranceMoneyPropertyLimit" ,
        type: 4
      },
      {
        value:"FranchiseSize" ,
        type: 4
      },
      {
        value:"CertificatePrice" ,
        type: 4
      },
      {
        value:"CarNumber" ,
        type: 1
      },
      {
        value:"CarType" ,
        type: 1
      },
      {
        value:"DriverLicense" ,
        type: 1
      },
      {
        value:"PoliceStiker" ,
        type: 1
      },
      {
        value:"RegistrationCity" ,
        type: 1
      },
      {
        value:"ManufacturYear" ,
        type: 4
      },
      {
        value:"OrderId" ,
        type: 3,
        url: "orders/short"
      }
    ]
  };

const Order: CustomForm =
  {
    title: "Order",
    postUrl: "orders",
    inputs: [
      {
        value:"OrderDate" ,
        type: 2
      },
      {
        value:"User" ,
        type: 3,
        url: "UserInfoes/short"
      }
  ]
  }
const UserInfo: CustomForm =
  {
    title: "UserInfo",
    postUrl: "UserInfoes",
    inputs: [
      {
        value:"Name" ,
        type: 1
      },
      {
        value:"DataBirthday" ,
        type: 2
      },
      {
        value:"City" ,
        type: 1
      },
      {
        value:"District" ,
        type: 1
      },
      {
        value:"Zip" ,
        type: 1
      },
      {
        value:"Idcode" ,
        type: 1
      },
      {
        value:"PhoneNumber" ,
        type: 1
      },
      {
        value:"Email" ,
        type: 5
      },
      {
        value:"Passport" ,
        type: 6
      },
    ]
  }
const Document: CustomForm =
  {
    title: "DocumentTypes",
    postUrl: "DocumentTypes",
    inputs:[
      {
        value:"DocumentName" ,
        type: 1
      }
    ]};
const Photo: CustomForm =
  {
    title: "Photo",
    postUrl: "Photos/link",
    inputs:[
      {
        value:"ImageUrl" ,
        type: 1
      },
      {
        value:"OrderId" ,
        type: 3,
        url: "orders/short"
      },
      {
        value:"DocumentTypeId" ,
        type: 3,
        url: "DocumentTypes/short"
      },
    ]}

export const Forms : CustomForm[] = [RegistrationCertificate,Order, UserInfo,Document,Photo ]
