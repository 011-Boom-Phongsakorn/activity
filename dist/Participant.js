"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const Activity_1 = require("./Activity");
const Certificate_1 = require("./Certificate");
const Instructor_1 = require("./Instructor");
const Registration_1 = require("./Registration");
const User_1 = require("./User");
class Participant extends User_1.User {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    searchActivity() {
        let activity = Activity_1.Activity.searchActivity();
        return activity;
    }
    registerForActivity(activity) {
        let registration = new Registration_1.Registration(1, this, activity, 'wait');
        return true;
    }
    downloadCertificate(activity) {
        let instructor = new Instructor_1.Instructor('name teacher', 'p123', 't', 'teacher', 't@gmail.com');
        let certificate = new Certificate_1.Certificate(Date.now(), 'content', instructor, 'signature', 'activity of coding');
        return certificate;
    }
    toString() {
        return `Participant[${super.toString()}]`;
    }
}
exports.Participant = Participant;
