interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

interface Directors extends Teacher{
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, LastName: string): string;
}

function printTeacher (firstName: string, lastName: string): string {
    const teacher = { firstName, lastName };
    return `${firstName}. ${lastName}`;
}

class StudentClass {
    constructor(public firstName: string, public lastName: string) {}  
    
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


// Example usage:
const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "New york",
    contract: false
};

console.log(teacher1);

const director1: Directors = {
     firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "New york",
    contract: false,
    numberOfReports: 17
}

console.log(director1);