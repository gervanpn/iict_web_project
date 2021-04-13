export class UserInfo {
    firstName: string;
    lastName:string
    email: string;
    phone: string;
    city: string;
    companyName:string;
    companyPosition: string;
    admin:boolean;

    constructor(firstName:string, lastName:string, email:string, phone:string, city:string, 
        companyName:string, companyPosition:string, admin:boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.companyName = companyName;
        this.companyPosition = companyPosition;
        this.admin = admin
    }
}
