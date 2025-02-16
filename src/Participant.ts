import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { Instructor } from "./Instructor";
import { Registration } from "./Registration";
import { User } from "./User";

class Participant extends User {
    private status: string
    constructor(username: string, password: string, name: string, role: string, email: string, status: string){
        super(username, password, name, role, email)
        this.status = status
    }

    public getStatus(): string{
        return this.status
    }

    public setStatus(status: string): void{
        this.status = status
    }

    public searchActivity(): Activity[]{
        let activity = Activity.searchActivity()
        return activity
    }

    public registerForActivity(activity: Activity): boolean{
        let registration = new Registration(1, this, activity, 'wait')
        return true
    }

    public downloadCertificate(activity: Activity): Certificate{
        let instructor = new Instructor('name teacher', 'p123', 't', 'teacher', 't@gmail.com')
        let certificate = new Certificate(Date.now(), 'content', instructor, 'signature', 'activity of coding')
        return certificate
    }
    
    public toString(): string {
        return `Participant[${super.toString()}]`
    }

}

export { Participant }