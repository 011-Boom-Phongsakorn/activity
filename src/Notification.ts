import { Participant } from "./Participant"

class Notification {
    private notificationId: number
    private message: string
    private recipient: Participant
    private status: string

    constructor(notificationId: number, message: string, recipient: Participant, status: string){
        this.notificationId = notificationId
        this.message = message
        this.recipient = recipient
        this.status = status
    }

    public toString(): string{
        return `Notification[notificationId=${this.notificationId}, message=${this.message}, recipient=${this.recipient}, status=${this.status}]`
    }
}

export { Notification }