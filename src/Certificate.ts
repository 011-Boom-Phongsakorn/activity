import { Instructor } from "./Instructor"
import { Notification } from "./Notification"
import { Participant } from "./Participant"

class Certificate {
    private certificateId: number
    private content: string
    private issuer: Instructor
    private signature: string
    private template: string
    
    constructor(certificateId: number, content: string, issuer: Instructor, signature: string, template: string){
        this.certificateId = certificateId
        this.content = content
        this.issuer = issuer
        this.signature = signature
        this.template = template
    }

    public generateCertificate(): Certificate{
        let certificate = new Certificate(this.certificateId, this.content, this.issuer, this.signature, this.template)
        return certificate
    }

    public sendCertificateNotification(participant: Participant): void{
        let notification = new Notification(Date.now(), 'ใบรับรองของคุณพร้อมให้ดาวน์โหลดแล้ว', participant, 'pending')
        notification.toString()
    }

    public toString(): string{
        return `Certificate[certificateId=${this.certificateId}, content=${this.content}, issuer=${this.issuer}, signature=${this.signature}, template=${this.template}]`
    }
}

export { Certificate }