import { Sex } from "./sex";

export interface User {

    userId: string,
    userName: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    age: number,
    sex: Sex,
    email: string,
    lastLoginTimestamp: Date,
    createTimestamp: Date,
    updateTimestamp: Date
}
