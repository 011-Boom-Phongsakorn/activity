"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    constructor(registrationId, participant, activity, status) {
        this.registrationId = registrationId;
        this.participant = participant;
        this.activity = activity;
        this.status = status;
    }
    submitRegistration(registrationId, participant, activity, status) {
        this.registrationId = registrationId;
        this.participant = participant;
        this.activity = activity;
        this.status = status;
    }
    updateStatus(status) {
        this.status = status;
    }
    toString() {
        return `Registration[registraId=${this.registrationId}, participant=${this.participant}, activity=${this.activity}, status=${this.status}]`;
    }
}
exports.Registration = Registration;
