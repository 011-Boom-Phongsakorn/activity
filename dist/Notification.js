"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(notificationId, message, recipient, status) {
        this.notificationId = notificationId;
        this.message = message;
        this.recipient = recipient;
        this.status = status;
    }
    toString() {
        return `Notification[notificationId=${this.notificationId}, message=${this.message}, recipient=${this.recipient}, status=${this.status}]`;
    }
}
exports.Notification = Notification;
