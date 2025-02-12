"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const Notification_1 = require("./Notification");
class Certificate {
    constructor(certificateId, content, issuer, signature, template) {
        this.certificateId = certificateId;
        this.content = content;
        this.issuer = issuer;
        this.signature = signature;
        this.template = template;
    }
    generateCertificate() {
        let certificate = new Certificate(this.certificateId, this.content, this.issuer, this.signature, this.template);
        return certificate;
    }
    sendCertificateNotification(participant) {
        let notification = new Notification_1.Notification(Date.now(), 'ใบรับรองของคุณพร้อมให้ดาวน์โหลดแล้ว', participant, 'pending');
        notification.toString();
    }
    toString() {
        return `Certificate[certificateId=${this.certificateId}, content=${this.content}, issuer=${this.issuer}, signature=${this.signature}, template=${this.template}]`;
    }
}
exports.Certificate = Certificate;
