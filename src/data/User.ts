export class User {
    private user: string;
    private password: string;

    constructor(user: string, password: string){
        this.user = user;
        this.password = password;
    }
    public Validate(): boolean {
        if (this.user.trim().length > 3 && this.password.length > 6){
            return true;
        }
        return false;
    }
}