export interface DocumentType
{
     documentTypeId: number;
     documentName: string;
}

export interface Order {
     orderId: number;
     confirmation: boolean;
     orderDate: Date;
     userInfoId: number;
}

export interface Photo {
     photoId: number;
     valid: boolean;
     imageUrl: string;
     documentTypeId: number;
     orderId: number;
}

export interface RegistrationCertificate {
     userId: number;
     vin: string;
     dataStart: Date;
     dataEnd: Date;
     dataContract: Date;
     insuranceMoneyLiveLimit: number;
     insuranceMoneyPropertyLimit: number;
     franchiseSize: number;
     certificatePrice: number;
     carNumber: string;
     carType: string;
     driverLicense: string;
     policeStiker: string;
     registrationCity: string;
     manufacturYear: number;
     orderId: number;
}

export interface UserInfo {
     userInfoId: number;
     name: string;
     dataBirthday: Date;
     city: string;
     district: string;
     zip: string;
     passport: string;
     idcode: string;
     phoneNumber: string;
     email: string;
}
