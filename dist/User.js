"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, name, role, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.role = role;
        this.email = email;
    }
    register(username, password) {
        if (username && password) {
            return true;
        }
        else {
            return false;
        }
    }
    login(username, password) {
        if (this.username === username) {
            if (this.password === password) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    logout() {
        return true;
    }
    updateProfile(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        return `User[username=${this.username}, password=${this.password}, name=${this.name}, role=${this.role}, email=${this.email}]`;
    }
}
exports.User = User;
