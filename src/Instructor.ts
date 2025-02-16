import { Activity } from "./Activity"
import { Participant } from "./Participant"
import { Registration } from "./Registration"
import { User } from "./User"

class Instructor extends User {
    constructor(username: string, password: string, name: string, role: string, email: string){
        super(username, password, name, role, email)
    }

    public createActivity(): Activity{
        let activity = Activity.createActivity(
            1,
            "Mock Activity",
            "Mock Organizer",
            100,
            "2025-03-01 to 2025-03-10",
            "2025-02-20 to 2025-02-28",
            "Active",
            true,
            false,
            this,
            "09:00 - 17:00"
        )
        return activity
    }

    // public approveParticipant(participants: Participant[]): void{
    //     for(let i = 0; i < participants.length; i++) {
    //         if(participants[i].getStatus() === 'pending'){
    //             participants[i].setStatus('approve')
    //             console.log(`Approved Participant | ${participants[i].getName()}`)
    //         }
    //     }
    // }

    public approveParticipant(): void{

    }

    public issueCertificate(): void{
        
    }

    public searchActivity(): Activity[] {
        let activity = Activity.searchActivity()
        return activity
    }
}

export { Instructor }