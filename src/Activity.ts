import { Certificate } from "./Certificate"
import { Instructor } from "./Instructor"

class Activity {
    private activityId: number
    private name: string
    private organizer: string
    private maxParticipant: number
    private activityPeriod: string
    private registrationPeriod: string
    private status: string
    private approvalRequired: boolean
    private certificateIssued: boolean
    private instructor: Instructor
    private schedule: string
    
    constructor(activityId: number, name: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status: string, approvalRequired: boolean, certificateIssued: boolean, instructor: Instructor, schedule: string){
        this.activityId = activityId
        this.name = name
        this.organizer = organizer
        this.maxParticipant = maxParticipant
        this.activityPeriod = activityPeriod
        this.registrationPeriod = registrationPeriod
        this.status = status
        this.certificateIssued = certificateIssued
        this.approvalRequired = approvalRequired
        this.instructor = instructor
        this.schedule = schedule
    }

    public static activities: Activity[] = []

    public static searchActivity(): Activity[] {
        let instructor = new Instructor('teacher', 'p123', 't1', 'teacher', 't@gmail.com')
        let activity = []
        activity.push(new Activity(1, "Workshop TypeScript", "Tech Group", 50, "2024-02-10", "2024-02-01 to 2024-02-09", "active", true, false, instructor, "10:00 - 12:00"))
        return activity
    }

    public static createActivity(
        activityId: number,
        name: string,
        organizer: string,
        maxParticipant: number,
        activityPeriod: string,
        registrationPeriod: string,
        status: string,
        approvalRequired: boolean,
        certificateIssued: boolean,
        instructor: Instructor,
        schedule: string
    ): Activity{
        let newActivity = new Activity(
            activityId,
            name,
            organizer,
            maxParticipant,
            activityPeriod,
            registrationPeriod,
            status,
            approvalRequired,
            certificateIssued,
            instructor,
            schedule
        )
        // เก็บ instance ที่สร้างใน array
        Activity.activities.push(newActivity)
        return newActivity
    }

    public updateActivity(activityId: number, name: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status: string, approvalRequired: boolean, certificateIssued: boolean, instructor: Instructor, schedule: string): void{
        this.activityId = activityId
        this.name = name
        this.organizer = organizer
        this.maxParticipant = maxParticipant
        this.activityPeriod = activityPeriod
        this.registrationPeriod = registrationPeriod
        this.status = status
        this.certificateIssued = certificateIssued
        this.approvalRequired = approvalRequired
        this.instructor = instructor
        this.schedule = schedule
    }

    public deleteActivity(activityId: number): string{
        if(this.activityId === activityId){
            return `Deleted The Activity Succuessfully.`
        }else{
            return `Can not delete the activity : ${new Error()}`
        }
    }

    public publishActivity(status: string): void{
        this.status = status
    }

    public approvePaticipant(): void{
         
    }

    public generateCertificate(): Certificate{
        let issuer = new Instructor('t1', 'tpass', 'tname', 'teacher', 't@gmail.com')
        let certificate = new Certificate(1, 'content', issuer, 'signature', 'template')
        return certificate
    }
}

export { Activity }