import { Activity } from "./Activity"
import { Participant } from "./Participant"

class Registration {
    private registrationId: number
    private participant: Participant
    private activity: Activity
    private status: string
    
    constructor(registrationId: number, participant: Participant, activity: Activity, status: string){
        this.registrationId = registrationId
        this.participant = participant
        this.activity = activity
        this.status = status
    }

    public submitRegistration(registrationId: number, participant: Participant, activity: Activity, status: string): void{
        this.registrationId = registrationId
        this.participant = participant
        this.activity = activity
        this.status = status
    }

    public updateStatus(status: string): void{
        this.status = status
    }

    public toString(): string{
        return `Registration[registraId=${this.registrationId}, participant=${this.participant}, activity=${this.activity}, status=${this.status}]`
    }
}

export { Registration }