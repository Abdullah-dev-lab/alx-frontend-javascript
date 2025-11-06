interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly yearsOfExperience?: number;
    readonly location: string;
    readonly any: boolean;
};

const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "New york",
    any: false
};