export class UserInfo {
    firstName: string;
    lastName:string
    email: string;
    phone: string;
    city: string;
    dateAdded: Date;
    lastLogin: Date;

    constructor(firstName:string, lastName:string, email:string, phone:string, city:string, dateAdded: Date, lastLogin: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.dateAdded = new Date();
        this.lastLogin = new Date();
    }
}
