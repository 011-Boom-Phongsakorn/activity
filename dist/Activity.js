"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const Instructor_1 = require("./Instructor");
class Activity {
    constructor(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, certificateIssued, instructor, schedule) {
        this.activityId = activityId;
        this.name = name;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.certificateIssued = certificateIssued;
        this.approvalRequired = approvalRequired;
        this.instructor = instructor;
        this.schedule = schedule;
    }
    static searchActivity() {
        let instructor = new Instructor_1.Instructor('teacher', 'p123', 't1', 'teacher', 't@gmail.com');
        let activity = [];
        activity.push(new Activity(1, "Workshop TypeScript", "Tech Group", 50, "2024-02-10", "2024-02-01 to 2024-02-09", "active", true, false, instructor, "10:00 - 12:00"));
        return activity;
    }
    static createActivity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, certificateIssued, instructor, schedule) {
        let newActivity = new Activity(activityId, name, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequired, certificateIssued, instructor, schedule);
        // เก็บ instance ที่สร้างใน array
        Activity.activities.push(newActivity);
        return newActivity;
    }
}
exports.Activity = Activity;
Activity.activities = [];
