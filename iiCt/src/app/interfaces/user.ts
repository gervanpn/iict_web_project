export class User {
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;

    constructor(uid:string, email:string, displayName:string, emailVerified: boolean) {
        this.email = email;
        this.uid = uid;
        this.displayName = displayName
        this.emailVerified = emailVerified
    }
}
