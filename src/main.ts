import { User } from "./User";
import { Notification } from "./Notification";
import { Participant } from "./Participant";
import { Registration } from "./Registration";
import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { Instructor } from "./Instructor";

console.log('####################')
const user = new User('Phongsakorn', 'p123', 'Boom', 'student', '664259011@webmail.npru.ac.th')
console.log(user.toString())
console.log('####################')

console.log('####################')
const participant = new Participant('Phongsakorn', 'p456', 'Boom', 'student', 'lilith.zny@gmail.com', 'pending')
console.log(participant.toString())
console.log('####################')

console.log('####################')
const notification = new Notification(1, 'You were invited in class already.', participant, 'wait')
console.log(notification.toString())
console.log('####################')

console.log('####################')
const instructor = new Instructor('name teacher', 'p123', 't', 'teacher', 't@gmail.com')
console.log('####################')

console.log('####################')
const activity = new Activity(
    1,
    "Mock Activity",
    "Mock Organizer",
    100,
    "2025-03-01 to 2025-03-10",
    "2025-02-20 to 2025-02-28",
    "Active",
    true,
    false,
    instructor,
    "09:00 - 17:00"
)
console.log('####################')




console.log('####################')
const registration = new Registration(Date.now(), participant, activity, 'pending')
console.log(registration.toString())
console.log('####################')

console.log('####################')
const certificate = new Certificate(Date.now(), 'content', instructor, 'signature', 'Robot')
console.log(certificate.toString())
console.log('####################')