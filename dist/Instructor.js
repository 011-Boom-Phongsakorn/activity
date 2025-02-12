"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Activity_1 = require("./Activity");
const User_1 = require("./User");
class Instructor extends User_1.User {
    constructor(username, password, name, role, email) {
        super(username, password, name, role, email);
    }
    createActivity() {
        let activity = Activity_1.Activity.createActivity(1, "Mock Activity", "Mock Organizer", 100, "2025-03-01 to 2025-03-10", "2025-02-20 to 2025-02-28", "Active", true, false, this, "09:00 - 17:00");
        return activity;
    }
}
exports.Instructor = Instructor;
